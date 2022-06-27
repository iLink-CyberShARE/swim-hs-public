const express = require("express"); 
const session = require('express-session');
const cors = require("cors"); 
const bodyParser = require("body-parser"); 
const swaggerJsdoc = require("swagger-jsdoc"); 
const swaggerUi = require("swagger-ui-express");
const morgan = require("morgan");
const passport = require("passport");

// import passport setups
var hookAuth2Strategy = require("./api/services/passportStrategy");

// route imports
const hsAuthRoutes = require("./api/routes/hs-auth")(passport);

var app = express();

// Open API 3.0 settings (swagger)
const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    openapi: "3.0.0",
    info: {
      title: "SWIM-HS Bridge Service",
      description: "OAuth 2.0 implementation to conect with Hydroshare repository",
      version: "1.0.0",
    },
    termsOfService: "https://swim.cybershare.utep.edu/en/policy",
    license: {
      name: "Creative Commons Attribution-NonCommercial 4.0 International License",
      url: "https://creativecommons.org/licenses/by-nc/4.0/",
    },
    contact: {
      name: "SWIM Team",
      email: "swim@utep.edu"
    },
    servers: [
      {
        url: process.env.APPURL // "url": "<your server url>"
      },
    ],
  }),
  apis: ["api/routes/*.js"], // file location of the routes
};

const uiOpts = {
  customSiteTitle: "SWIM-HS Bridge", // title for the doc site
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
// route for the swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs, uiOpts));

// setup body parser with json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup session settings
var sess = {
  secret: 'dummykeyhere',
  cookie: {}
}
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());

// hook passport oauth 2 strategy
hookAuth2Strategy(passport);

// Hook up the HTTP logger - debug endpoint calls
app.use(morgan("dev"));

// CORS settings
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Authorization, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  next();
});

// route registry
app.use("/api/hs-auth", hsAuthRoutes);

module.exports = app;
