var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/', function (req, res) {
  res.redirect('/');
});

app.post('/post', function (req, res) {
  res.redirect('/post');
});

var hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});