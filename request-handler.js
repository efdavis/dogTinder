var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var petFinderFetch = require('./utils/petfinderHelper')
var request = require('request');

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

app.get('/', function(request, response){
  response.sendfile(path.resolve(__dirname, "./public/index.html"));
});

app.get('/api', function(req, res){
  // connect to API and get matching dogs
  // connect to DB and get matching dogs
  petFinderFetch(req.query, function(dogs){
    res.send(dogs);
  })


})

module.exports = app;