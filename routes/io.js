var express = require('express');
var router = express.Router();

/* Get IO . */
router.get('/summary', function (req, res, next) {
    res.json({ oneWeek: 83, twoWeeks: 348 });
});

router.post('/status', function (req, res, next) {
    console.log(`/io/status: REQUEST.BODY: ${JSON.stringify(req.body)}`);
    res.json(req.body);
});

module.exports = router;
