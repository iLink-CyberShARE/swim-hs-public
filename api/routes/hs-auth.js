/**
 * HydroShare Authorization endpoints
 */

"use strict";

const express = require("express");
const router = express.Router();
const config = require("../config");

var HSAuthRoutes = function (passport) {
  /**
   * @swagger
   * /api/hs-auth/login:
   *   get:
   *      description: Redirect to hydroshare authentication page. Use the endpoint directly on the browser.
   *      tags:
   *        - HydroShare Auth
   *      responses:
   *          '302':
   *              description: URL found
   *          '500':
   *              description: Internal Error
   */
  router.get("/login", passport.authenticate("oauth2"));

  /**
   * @swagger
   * /api/hs-auth/callback:
   *   get:
   *      description: Authentication call back endpoint.
   *      tags:
   *        - HydroShare Auth
   *      responses:
   *          '200':
   *              description: Success
   *          '500':
   *              description: Internal Error
   */
  router.get(
    "/callback",
    passport.authenticate("oauth2", {
      failureRedirect: "/", //TODO error page on swim UI
      session: false,
    }),
    function (req, res) {
      // token expires in 43 minutes
      res.redirect(
        config.hsloggedinurl +
          "/" +
          req.user.access_token +
          "/" +
          req.user.expires_in
      );
    }
  );

  return router;
};

module.exports = HSAuthRoutes;
