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

// sets up Facebook Auth/Login through Passport module
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile.id, profile.id.length);
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb();
    // });
  }
));

app.get('/', function(request, response){
  response.sendfile(path.resolve(__dirname, "./public/index.html"));
});


// signup/login
app.post('/login',
  passport.authenticate('facebook'));
//
app.get('/login', function(req, res){
  res.sendFile(path.resolve(__dirname, './public/login.html'));
})

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    console.log(req);
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get('/dog-tinder-api', function(req, res){
  // connect to API and get matching dogs
  // connect to DB and get matching dogs
  petFinderFetch(req.query, function(animals){
    res.send(animals);
  })


})

module.exports = app;