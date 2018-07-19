var express = require('express');
var router = express.Router();

var UsersController = require('../controllers/users')

router.post('/users', UsersController.create);
router.post('/users/login', UsersController.login);

module.exports = router
