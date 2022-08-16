// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const moviebModel = require("../models/Movie.model");


// all your routes here
router.get("/movies/create", (req, res) => {
    res.render("/Movies/new-movie");
  });
 


module.exports = router;