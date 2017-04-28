var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var petFinderFetch = require('./utils/petfinderHelper')
var request = require('request');
var passport = require('./utils/fbPassportHelper')

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

// set up passport for FB Auth on Express
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function(request, response){
  response.sendfile(path.resolve(__dirname, "./public/index.html"));
});

// signup/login
app.get('/auth/facebook',
  passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login'}));

app.get('/login', function(req, res){
  res.sendFile(path.resolve(__dirname, './public/login.html'));
})

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    console.log('Inside FB callback',req);
    // Successful authentication, redirect home.
    res.send(req.user);
    // console.log(req.user);
    // find or add
  });

app.get('/dog-tinder-api', function(req, res){
  // connect to API and get matching dogs
  // connect to DB and get matching dogs
  petFinderFetch(req.query, function(animals){
    res.send(animals);
  })
})

module.exports = app;