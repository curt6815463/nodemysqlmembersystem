'use strict';

var CONFIG = require('../config/config.js')
var Sequelize = require('sequelize')


const connection = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_pass, {
  host: CONFIG.db_host,
  dialect: CONFIG.db_dialect,
  port: CONFIG.db_port,
  operatorsAliases: false
});

module.exports = connection
