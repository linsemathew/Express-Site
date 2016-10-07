var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/consultation', function(req, res, next) {
  res.render('consultation', { title: 'Consultation' });
});

module.exports = router;