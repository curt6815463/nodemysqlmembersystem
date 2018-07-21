var sequelize = require('sequelize')
var connection = require('./index.js')


var Users = connection.define('users', {
  name: sequelize.STRING,
  account: sequelize.STRING,
  password: sequelize.STRING,
  tel: sequelize.STRING
})

module.exports = Users
