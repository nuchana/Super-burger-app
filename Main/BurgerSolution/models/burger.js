// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.create("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  // update: function(objColVals, condition, cb) 
  update: function (id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }


};

// Export the database functions for the controller (burgerController.js).
module.exports = burgers;