var mysql = require('mysql');
var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '677301',
    database: 'igrus'
});
db.connect((e)=>{
    if(e) throw e;
    console.log('db 연결 성공');
}

);

module.exports = db;