var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var petFinderFetch = require('./utils/petfinderHelper');
var request = require('request');
var passport = require('./utils/fbPassportHelper');
var session = require('express-session');
var dbUtils = require('./db/dbUtils');
var Cookies = require('universal-cookie'); 

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

app.use(session({ secret: process.env.SESSION_SECRET, saveUninitialized: true, resave: true, name: 'dogbiscuit' }));
// set up passport for FB Auth on Express
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (request, response) => {
  if(request.session.user) {
    response.cookie('loggedIn', true);
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

  passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {

  req.session.user = req.user;

  const cookies = new Cookies(req.headers.cookie);
  var userAnimalList = cookies.get('animalList');

  //ADD ANIMALS FROM COOKIE LIST TO DATABASE
  if (userAnimalList) {
    let animalObjArr = userAnimalList.map((id) => {
      if (id) {
        return {petFinderid: id.toString()}
      } else {
        // this is a dogTinder dog
          // functionality not built out
      }
    });

    let facebookID = req.user.id;

    dbUtils.doesUserHaveList(facebookID, (bool) => {
      if (bool) {
        dbUtils.updateUserList({facebookID: facebookID}, animalObjArr, () => {
          res.redirect('/');
        })
      } else {
        dbUtils.saveUserList([null, null, facebookID], animalObjArr, () => {
          res.redirect('/');
        })
      }
    });
  } else {
    res.redirect('/');
  }
});

app.get('/dog-tinder-api/list', (req, res) => {
  console.log('hello!')
  if (req.user) {
    let facebookID = req.session.user.id;

    dbUtils.fetchUserAnimals({facebookID: facebookID}, (results) => {
      let dogIds = results.map(dog => dog.petFinderid);

      petFinderFetch.getList(dogIds, (dogs) => {
        res.send(dogs)
      })
    })
  } else {
    const cookies = new Cookies(req.headers.cookie);
    var userAnimalList = cookies.get('animalList');
  
    if (userAnimalList) {
      petFinderFetch.getList(userAnimalList, function(results) {
        // console.log("FINAL FETCH FOR ALL LIST:", results);
        res.send(results);
      });
    } else {
      res.send([]);
    }
  }

});

app.post('/dog-tinder-api/list', (req, res) => {
  // this route gets an array of dogs from the user's dog-list
  // check to see if logged in
  if (req.user) {
    // make animalObjArr
    let animalObjArr = req.body.map((id) => {
      if (id) {
        return {petFinderid: id.toString()}
      } else {
        // this is a dogTinder dog
          // functionality not built out
      }
    });

    let facebookID = req.user.id;

    dbUtils.doesUserHaveList(facebookID, (bool) => {
      if (bool) {
        dbUtils.updateUserList({facebookID: facebookID}, animalObjArr, () => {
          res.send(201);
        })
      } else {
        dbUtils.saveUserList([null, null, facebookID], animalObjArr, () => {
          res.send(201);
        })
      }
    })
  } else {
    res.send(201)
  }

});

app.get('/dog-tinder-api', (req, res) => {
  // connect to API and get matching dogs
  petFinderFetch.fetchAnimals(req.query, function(animals){
    // get animals from DB here and append them to these 'animals'
    res.send(animals);
  })
});

app.delete('/dog-tinder-api/removeAnimal', (req, res) => {
  // need facebookID (req.user)
  // need dogId (body?)

  dbUtils.removeAnimalFromUsersList(facebookID, petFinderId, () => {
    console.log('removed from users list');
  })
});

app.get('/logout', (req, res) => {
  req.session.destroy(function (err) {
    res.clearCookie('loggedIn');
    res.redirect('/');
    if(err) {
      res.send(err);
    }
  });
})

module.exports = app;