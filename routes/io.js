var express = require('express');
var router = express.Router();

/* Get IO . */
router.get('/summary', function(req, res, next) {
  res.json({oneWeek: 83, twoWeeks: 348});
});

module.exports = router;
