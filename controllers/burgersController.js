var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger.js");

// get route => index
router.get("/", function(req, res){
  res.redirect("/burgers");
});

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
  burgers.all(function(data) {
    
    console.log(data);
    res.render("index", { burger_data: data });
  });
});


router.post("/burgers/create", function(req, res) {
  burgers.create([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");

  });
});

router.put("/burgers/:id", function(req, res) {
 

  burgers.update(req.params.id, function(result) {
    console.log(result);

    res.status(200).end();
   
  });
});



// Export routes for server.js to use.
module.exports = router;