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

// set up passport for FB Auth on Express
app.use(passport.initialize());
app.use(passport.session());

// sets up Facebook Auth/Login through Passport module
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // console.log(profile.id, profile.id.length);
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      done(null, profile);
    // });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

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