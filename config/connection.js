const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.JAWSDB_URL || 'mysql://root:NUcode2020!114@localhost/burgers_db')

module.exports = connection
