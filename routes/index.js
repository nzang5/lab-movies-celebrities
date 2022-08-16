const router = require("express").Router();

const celebrityRoutes = require('./celebrities.routes')
router.use('/celebrities/', celebrityRoutes)

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


module.exports = router;
