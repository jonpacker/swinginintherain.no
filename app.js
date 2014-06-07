var express = require('express');
var http = require('http');

var server = http.createServer();
var app = express(server);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

server.listen(4000);
