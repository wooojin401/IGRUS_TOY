var mysql = require('mysql');
var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '111111',
    database: 'igrus'
});
db.connect();

module.exports = db;
