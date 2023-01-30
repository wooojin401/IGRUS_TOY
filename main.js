const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser');
const FileStore = require('session-file-store')(session)
var authRouter = require('./lib_login/auth.js');
var authCheck = require('./lib_login/authCheck.js');
var template = require('./lib_login/template.js');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: '~~~',	// 원하는 문자 입력
  resave: false,
  saveUninitialized: true,
  store:new FileStore(),
}))

app.get('/', (req, res) => {
  if (!authCheck.isOwner(req, res)) {  // 로그인 안되어있으면 로그인 페이지로 이동시킴
    res.redirect('/auth/login');
    return false;
  } else {                                      // 로그인 되어있으면 메인 페이지로 이동시킴
    res.redirect('/main');
    return false;
  }
})

// 인증 라우터
app.use('/auth', authRouter);

// 메인 페이지
app.get('/main', (req, res) => {
  if (!authCheck.isOwner(req, res)) {  // 로그인 안되어있으면 로그인 페이지로 이동시킴
    res.redirect('/auth/login');
    return false;
  }
  var html = template.HTML('Welcome',
    `<hr>
        <h2>메인페이지</h2>
        <p><a href="/auth/">수강신청하러가기</a></p>
        <p><a href="/auth/">시간표 확인하기</a></p>`,
    authCheck.statusUI(req, res)
  );
  res.send(html);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})