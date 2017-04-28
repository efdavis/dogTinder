var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

// sets up Facebook Auth/Login through Passport module
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.ROOT_URL + "/auth/facebook/callback"
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

module.exports = passport;