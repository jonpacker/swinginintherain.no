var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.render('index');
});

app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

server.listen(4000);
