const express = require('express')
const session = require('express-session')
const cookieParser=require('cookie-parser');
const bodyParser = require('body-parser');
const FileStore = require('session-file-store')(session)
var template = require('./admin/template.js');
var db = require('./admin/db.js');
const app = express()
const port = 3000


app.get('/admin', function(request,response) {
    

    var html = template.HTML('Admin',
      `<hr>
          <h2>관리자 페이지</h2>
          <p><a href="/subject">과목 열람히기</a></p>
          <p><a href="/timetable">시간표 편집</a></p>`
    );
    res.send(html);
  })




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })