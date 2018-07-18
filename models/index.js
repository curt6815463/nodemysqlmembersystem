'use strict';
var CONFIG = require('../config/config.js')

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var db        = {};
console.log(CONFIG.db_host)
console.log(CONFIG.db_name)
console.log(CONFIG.db_user)
console.log(CONFIG.db_pass)
console.log(CONFIG.db_dialect)
console.log(CONFIG.db_port)

const sequelize = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_pass, {
  host: CONFIG.db_host,
  dialect: CONFIG.db_dialect,
  port: CONFIG.db_port,
  operatorsAliases: false
});

module.exports = sequelize
