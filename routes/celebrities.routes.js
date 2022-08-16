
// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const CelebModel = require("../models/Celebrity.model");


// all your routes here

// creating a celeb route (GET)
router.get("/create", (req, res) => {
    res.render("celebrities/new-celebrity");
  });

//creating a celeb route (POST)
router.post("/create", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  console.log(req.body);
  
  CelebModel.create({ name, occupation, catchPhrase})
  .then(() => res.redirect('/'))
  .catch((err) => console.log(`An error occurred while creating the celebrity. Error: ${err}`)
  );

});


// List of all celebrities
router.get("/", (req, res) => {
  
  CelebModel.find()
  .then((celebFromDB)=>{
    console.log(celebFromDB);
    res.render("celebrities/celebrities", { celebFromDB }); 
   })
   .catch((err) =>console.log(`Error while getting the list of celebrities from the DB: ${err}`));
});


module.exports = router;