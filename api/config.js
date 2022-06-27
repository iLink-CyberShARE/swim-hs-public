/**
 * APP configuration variables. 
 * Setup a .env file for development, otherwise these are loaded
 * from system inv variables.
 */

"use strict"

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

var config = module.exports;

// fields for oath2 passport strategy
config.oath2strategy = {
    authurl: process.env.AUTHURL,
    tokenurl: process.env.TOKENURL,
    clientid: process.env.CLIENTID,
    clientsecret: process.env.CLIENTSECRET,
    callbackurl: process.env.CALLBACKURL
}

// redirect url when hs authentication process is complete
// token and expiration time are appended as follows:
// pattern: <domain.com>/token/expirationtime
config.hsloggedinurl = process.env.HSLOGGEDINURL

