var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Code-share' });
});

router.get('/about', function(req, res, next) {
	res.render('about', {title: 'code-share: a plaform for code collaboration.'});
});

router.route('/contact')
	.get(function(req, res, next) {
		res.render('contact', {title: 'code-share: a platform for code collaboration.'})
	})
	.post(function(req, res, next) {
		res.render('thank', {title: 'code-share: a platform for sharing code.'})
	})

module.exports = router;
