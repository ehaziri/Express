require('dotenv').load();

var express = require('express');
var parser = require('body-parser');
var path = require('path');
var app = express();
var port = process.env.PORT || 8000;

app.use(express.static(path.resolve('client')));
app.use(parser.urlencoded({extended: true}));

app.set('views', path.resolve('views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  console.log("Root route");
  res.render('index');
});

app.post('/results', function(req, res) {
  console.log(req.body);
  res.render('result', {information:req.body})
});

app.listen(port, function() {
  console.log("Server running on port: ", port);
})
