'use strict';

const OAuth2Strategy = require('passport-oauth2');
const config = require("../config");

async function hookAuth2Strategy(passport){

  passport.serializeUser(function(user, done) {
    // console.log(user);
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  const strategy = new OAuth2Strategy({
    authorizationURL: config.oath2strategy.authurl,
    tokenURL: config.oath2strategy.tokenurl,
    clientID: config.oath2strategy.clientid,
    clientSecret: config.oath2strategy.clientsecret,
    callbackURL: config.oath2strategy.callbackurl,  
    passReqToCallback: false
  }, function(accessToken, refreshToken, params, profile, done) {
    return done(null, params);
  })

  passport.use(strategy);

}

module.exports = hookAuth2Strategy;