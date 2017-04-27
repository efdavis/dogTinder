var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var petFinderFetch = require('./utils/petfinderHelper')
var request = require('request');
var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

app.get('/', function(request, response){
  response.sendfile(path.resolve(__dirname, "./public/index.html"));
});

// signup/login

//

app.get('/dog-tinder-api', function(req, res){
  // connect to API and get matching dogs
  // connect to DB and get matching dogs
  petFinderFetch(req.query, function(animals){
    res.send(animals);
  })


})

module.exports = app;