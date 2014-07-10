/*
 * routes:
 *    - script serves pixlr-front.js
 *    - close serves close.html
 *
 * DO NOT put this example in production, this is a security hole
 */
var express = require('express');
var app = express();

app.use('/pixlr.js', express.static(__dirname + '/../pixlr.js'));
app.use('/close.html', express.static(__dirname + '/../close.html'));
app.get('/sendImage', function(req, res){
    // check security here
    // then write to a file or to a database
    var url = req.query.image;
    var path = __dirname + '/' + req.query.path;
    console.log('/sendImage route', url, path);
    download(url, path, function (err) {
        if (!err){
            res.status(200).sendfile('close.html');
        }
        else{
            console.error('ERROR ', err);
            res.send(500);
        }
    });
});
app.use(express.static(__dirname));


// server 'loop'
var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
    console.log('Listening on port %d', port);
});

// download file locally

var fs = require('fs');
var http = require('http');
var https = require('https');
var url = require('url');

function download (srcPath, dstPath, cbk) {
    // http or https
    var http_s = http;
    if (srcPath.indexOf('https')===0){
        http_s = https;
    }



    // Function to download file using HTTP.get
    var options = {
        host: url.parse(srcPath).host,
        port: 80,
        path: url.parse(srcPath).pathname
    };

    var file_name = url.parse(srcPath).pathname.split('/').pop();
    var file = fs.createWriteStream(dstPath);

    http_s.get(options, function(res) {
        res.on('data', function(data) {
            file.write(data);
        }).on('end', function() {
            file.end();
            console.log(file_name + ' downloaded');
            cbk();
        });
    });
}
