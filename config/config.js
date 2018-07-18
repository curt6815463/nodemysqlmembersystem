require('dotenv').config()

let CONFIG = {}

CONFIG.db_host = process.env.DB_HOST
CONFIG.db_name = process.env.DB_NAME
CONFIG.db_user = process.env.DB_USER
CONFIG.db_pass = process.env.DB_PASS
CONFIG.db_dialect = process.env.DB_DIALECT
CONFIG.db_port = process.env.DB_PORT

module.exports = CONFIG
