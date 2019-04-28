var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var config = require('../config');
var transporter = nodemailer.createTransport(config.mailer);

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'CodeShare',
		description: 'the platform for code collaboration'
	});
});

router.get('/about', function (req, res, next) {
	res.render('about', {
		title: 'code-share: a plaform for code collaboration.'
	});
});

router.route('/contact')
	.get(function (req, res, next) {
		res.render('contact', {
			title: 'code-share: a platform for code collaboration.'
		})
	})
	.post(function (req, res, next) {
		req.checkBody('name', 'Empty name').notEmpty();
		req.checkBody('email', 'Invalid email').notEmpty();
		req.checkBody('message', 'Empty message').notEmpty();
		var errors = req.validationErrors();

		if (errors) {
			res.render('contact', {
				title: 'code-share: a plaform for code collaboration.',
				name: req.body.name,
				email: req.body.email,
				message: req.body.messge,
				errorMessages: errors
			});
		} else {
			var mailOptions = {
				from: 'code-share <no-reply@code-share.com>',
				to: 'demo@gmail.com',
				subject: 'you got a new message 📧',
				text: req.body.message
			}
			
			transporter.sendMail(mailOptions, function(error, info) {
				if(error) {
					return console.log(error);
				}
				res.render('thank', {
					title: 'code-share: a platform for sharing code.'
				})
			})
		}
	});

module.exports = router;
