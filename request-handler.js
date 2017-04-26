var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

app.get('/', function(request, response){
  response.sendfile(path.resolve(__dirname, "./public/index.html"));
});

module.exports = app;