##About this library

Node.js server + js client

This javascript library looks better to me than Pixlr's [official js library](http://developer.pixlr.com).

###The Javascript pixlr API

front end: index.html

###Example with node.js on the serverside

need  a server to save the changed image

##Pixlr API

This is the documentation of the [official API doc](http://pixlr.com/developer/api/) with markdown style (the official style is bearly readable).

###Introduction

The Pixlr API enables web developers to use Pixlr applications on their own site. Everything that is done on this site can be done on yours. Added advanced image editing capabilities is very easy.
Using the API is completely free, although if you expect to send us a lot of traffic please warn us beforehand.

###How it works

The /editor and /express pages takes special parameters either as querystring or form parameters. You dont have to do anything special to get the application to recognize the parameters, we check for them on every request.

###Javascript library

You can use the parameters specified below in anyway you want, but if you just want something simple and quick our javascript library is probably the thing to use.

We have a site with examples on [how to use the js library](http://developer.pixlr.com)

You can download the library here.

####In parameters (what you send to us)

Name    |    Description
--------|----------------
referrer    |    The name of the referring service for example "Your site name" or "Facebook"
icon    |    A url to a 16*16 icon to be shown at the save tab
exit    |    The URL to send the visitor if the user click exit/close
image    |    A URL to the image or the post raw data of the image to open
title    |    The title of the opened image
type    |    The filetype of the image, just type no ".", the apps will try to get the type from the URL if type param is not provided.
method    |    The way we send the image information, "GET" or "POST", default is "GET". If you set this to POST then you have to have a crossdomain.xml in the root of your web application. And you need to add pixlr.com to the list of valid domains (or just copy ours).
target    |    The URL to which we send the image information when saving
redirect    |    Set to "false" if you don't want the browser to follow the save post. i.e the user stay in the editor after saving.
locktarget    |    Remove the possibility for the user to "save to computer" and other service in Pixlr Editor
locktitle    |    Lock the image title so the user can't change it
locktype    |    Lock the save format, values are jpg, png, bmp, pxd or source, do not include "."
quality    |    Set the jpg quality when the user saves the image, values are 0-100
copy    |    Shows a checkbox on the save dialog that lets the user select "Save as copy"
maxwidth    |    Set the maximum width of an image the user saves
maxheight    |    Set the maximum height of an image the user saves
wmode (Advanced)    |    Change the flash wmode (transparent, opaque, window etc) when you need to use z-index and float HTML over the flash area

####Out parameters (what we send to you)

Name    |    Description
--------|----------------
image    |    The content of this parameter depends on the value of the "method" in-parameter. If method was GET the value of image is an url to where we saved the image. If method was POST the value of image is the actual image.
title    |    The title of the image the user typed in when saving.
type    |    The type of image can be: jpg, png, bmp or pxd.
state    |    The state of the image, can be "new", "copy", "replace". New is when the user open/creates the image in the editor. Copy is when the image is from the API and the image checked "Save as copy".
