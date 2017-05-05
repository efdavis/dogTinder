var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var petFinderFetch = require('./utils/petfinderHelper');
var request = require('request');
var passport = require('./utils/fbPassportHelper');
var session = require('express-session');

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(session({ secret: process.env.SESSION_SECRET, saveUninitialized: true, resave: true, name: 'dogbiscuit' }));
// set up passport for FB Auth on Express
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (request, response) => {
  if(request.session.user) {
    console.log(request.session.user.displayName + ' is logged in with FB ID: ' + request.session.user.id)
  }
  response.sendFile(path.resolve(__dirname, "./public/_index.html"));
});

// signup/login
app.get('/auth/facebook',
  passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login'}));

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/login.html'));
});

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    req.session.user = req.user
    // find or add user
    // user id is req.user.id
    // user's name is req.user.displayName
    // res.send(req.user);
    res.redirect('/');
    
  });

app.get('/dog-tinder-api', (req, res) => {
  // connect to API and get matching dogs
  // connect to DB and get matching dogs
  petFinderFetch(req.query, function(animals){
    res.send(animals);
  })
})

module.exports = app;