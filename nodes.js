// const https = require('https');
// const fs = require('fs');
// const serveIndex = require('serve-index');
// const express = require('express');

// const app = express();

// //顺序不能换
// app.use(serveIndex('./public'));
// app.use(express.static('./public'));

// const options = {
//   key: fs.readFileSync('../cert/6816792_www.jh46666.cn.key'),
//   cert: fs.readFileSync('../cert/6816792_www.jh46666.cn.pem')
// }
// app.get('/', function (req, res) {
//    res.send('Hello World');
// });
// app.get('/index.html', function (req, res) {
//    res.sendFile( __dirname + "/" + "index.html" );
// })
// const requestListener = function (req, res) {
//   res.writeHead(200);
//   res.end('Hello, World!');
// }

// const server = https.createServer(options, app);
 

// server.listen(443);
'use strict'

var http = require('http');
var https = require('https');
var fs = require('fs');

var serveIndex = require('serve-index');

var express = require('express');
var app = express();

//顺序不能换
app.use(serveIndex('./public'));
app.use(express.static('./public'));

var options = {
  key: fs.readFileSync('../cert/6816792_www.jh46666.cn.key'),
  cert: fs.readFileSync('../cert/6816792_www.jh46666.cn.pem')
}

var https_server = https.createServer(options, app);
https_server.listen(443, '0.0.0.0');

var http_server = http.createServer(app);
http_server.listen(8080, '0.0.0.0');



