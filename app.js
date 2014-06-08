var express = require('express');
var http = require('http');
var locale = require('locale');

var app = express();
var server = http.createServer(app);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(locale(['en', 'nb']));

app.get('/', function(req, res) {
  var resources = require('./res/' + req.locale + '.json');
  res.render('index', resources);
});

app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

server.listen(4000);
