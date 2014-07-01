var express = require('express');
var http = require('http');
var locale = require('locale');
var stylus = require('stylus');
var nib = require('nib');

var app = express();
var server = http.createServer(app);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(locale(['en', 'nb']));

app.get('/:locale?', function(req, res) {
  var locale = req.params.locale || req.locale;
  if (locale != 'nb' && locale != 'en') locale = 'en';
  var resources = require('./res/' + locale + '.json');
  res.render('index', {res: resources, locale: locale});
});

app.use(stylus.middleware({
  src: __dirname + '/public',
  compile: function(s, p) { return stylus(s).set('filename', p).use(nib()) }
}));
app.use(express.static(__dirname + '/public'));

server.listen(4000);
