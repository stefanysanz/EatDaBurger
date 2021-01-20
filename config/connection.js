const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.JAWSDB_URL || 'mysql://root:root@localhost/burgers_db')

module.exports = connection
