/**
 * sample hello world controller.
 * These methods contain the functional logic of the endpoints
 */

"use strict";

// The hello world controller.
var HelloController = {};

HelloController.sayHello = function (req, res) {
  return res.status(200).json({
    message: "Hello World!",
  });
};

module.exports = HelloController;
