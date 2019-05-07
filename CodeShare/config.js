require('dotenv').config()

dbuser = process.env.USERNAME
dbpassword = process.env.PASSWORD
domain = process.env.DOMAIN
db = process.env.DB

module.exports = {
	mailer: {
		service: 'Gmail',
		auth: {
			user: 'demo@gmail.com',
			password: 'demodemodemo'
		},		
	},
	dbConnstring: 'mongodb://dbuser:dbpassword@domain/db',
	sessionKey: 'HaloCodeShare'
}