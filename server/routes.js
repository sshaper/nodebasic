var express = require('express'),
	router = express.Router(),
	home = require('../controllers/user/home');
	
module.exports = function(app){
	/* USER ROUTES */
	router.get('/', home.index);
	app.use(router);
}
