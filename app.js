/**
 * Created by xucheng on 2016/12/9.
 */
var express = require('express');
var serveStatic = require('serve-static')
var fs= require('fs')
var app = express();
var rx = require('rx')
var routes = require('./routes/index')
app.set('view engine', 'pug')
app.use('/',routes)
app.use(serveStatic(__dirname + '/public'))

port = 3000
console.log(`http://localhost:${port}/`)

var http = require('http').Server(app);
var io = require('socket.io')(http);
http.listen(port);






