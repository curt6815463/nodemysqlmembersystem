var sequelize = require('sequelize')
var connection = require('./index.js')

var Users = connection.define('users', {
  name: sequelize.STRING,
  account: sequelize.STRING,
  password: sequelize.STRING,
  tel: sequelize.STRING
})


connection.sync()
  .then(function () {
    Users.create({
      name:'curt',
      account:'curt',
      password:'please',
      tel:'please'
    })
  })
