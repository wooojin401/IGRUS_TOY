const express = require('express')
const session = require('express-session')
const cookieParser=require('cookie-parser');
const bodyParser = require('body-parser');
const FileStore = require('session-file-store')(session)
var template = require('./admin/template.js');
const app = express()
const port = 3000

app.get('/', (req, res) => {
                                          // 로그인 되어있으면 메인 페이지로 이동시킴
      res.redirect('/main');

  })

app.get('/main', (req, res) => {
    

    var html = template.HTML('Welcome',
      `<hr>
          <h2>메인페이지</h2>
          <p><a href="/auth/">수강신청하러가기</a></p>
          <p><a href="/auth/">시간표 확인하기</a></p>`
    );
    res.send(html);
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })