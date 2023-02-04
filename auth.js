var express = require('express');
var cookie=require('cookie');
var router = express.Router();
var template = require('./template.js');
var db = require('./db');


// 로그인 화면
router.get('/login', function (request, response) {
    var title = '로그인';
    var html = template.HTML(title,`
            <h2>수강신청</h2>
            <form action="/auth/login_process" method="post">
            <p><input class="login" type="text" name="username" placeholder="ID"></p>
            <p><input class="login" type="password" name="pwd" placeholder="PASSWORD"></p>
            <p><input class="btn" type="submit" value="로그인"></p>
            </form>            
            <p><a href="/auth/register">회원가입</a></p>
            <p><a href="/auth/findpassword">비밀번호를 까먹으셨나요?</a></p>
            
        `, '');
    response.send(html);
});

// 로그인 프로세스
router.post('/login_process', function (request, response) {
    var username = request.body.username;
    var password = request.body.pwd;
    if (username && password) {             // id와 pw가 입력되었는지 확인
        
        db.query('SELECT * FROM usertable WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
            if (error) throw error;
            if(username==='wujin401'&&password==='1234'){
                response.send(`<script type="text/javascript">alert("관리자 페이지로 이동합니다."); 
                document.location.href="/admin";</script>`);
            }
            else if (results.length > 0) {       // db에서의 반환값이 있으면 로그인 성공 
                var cookies=cookie.parse(request.headers.cookie);        
                response.setHeader('Set-Cookie', 'Login=true');
                if(cookies.Login){
                request.session.is_logined = true;      // 세션 정보 갱신
                request.session.nickname = username;
                request.session.save(function () {       
                    response.redirect(`/`);
                      
                });}
            } else { 
                var cookies=cookie.parse(request.headers.cookie);
                response.setHeader('Set-Cookie', 'Login=false');
                response.send(`<script type="text/javascript">alert("로그인 정보가 일치하지 않습니다."); 
                document.location.href="/auth/login";</script>`);    
            }            
        });

    } else {
        response.send(`<script type="text/javascript">alert("아이디와 비밀번호를 입력하세요!"); 
        document.location.href="/auth/login";</script>`);    
    }
});

// 로그아웃
router.get('/logout', function (request, response) {
    request.session.destroy(function (err) {
        var cookies=cookie.parse(request.headers.cookie);
        response.setHeader('Set-Cookie', 'Login=false');
        response.redirect('/');
    });
});


// 회원가입 화면
router.get('/register', function(request, response) {
    var title = '회원가입';    
    var html = template.HTML(title, `
    <h2>회원가입</h2>
    <form action="/auth/register_process" method="post">
    <p><input class="login" type="text" name="username" placeholder="아이디"></p>
    <p><input class="login" type="password" name="pwd" placeholder="비밀번호"></p>    
    <p><input class="login" type="password" name="pwd2" placeholder="비밀번호 재확인"></p>
    <p><input class="login" type="text" name="pwd3" placeholder="당신이 좋아하는 숫자는?(비밀번호 찾기)"></p>
    <p><input class="btn" type="submit" value="제출"></p>
    </form>            
    <p><a href="/auth/login">로그인화면으로 돌아가기</a></p>
    `, '');
    response.send(html);
});

router.get('/findpassword', function(request, response) {
    var title = '비밀번호 찾기';    
    var html = template.HTML(title, `
    <h2>비밀번호 찾기</h2>
    <form action="/auth/findpassword_process" method="post">
    <p><input class="login" type="text" name="username" placeholder="아이디"></p>  
    <p><input class="login" type="password" name="pwd3" placeholder="당신이 좋아하는 숫자는?"></p>  
    <p><input class="btn" type="submit" value="제출"></p>
    </form>            
    <p><a href="/auth/login">로그인화면으로 돌아가기</a></p>
    `, '');
    response.send(html);
});
router.post('/findpassword_process', function (request, response) {
    var username = request.body.username;
    var question = request.body.pwd3;
    if (question&&username) {             //질문이 입력되었는지 확인
        
        db.query('SELECT * FROM usertable WHERE username = ? AND comments = ? ', [username, question], function(error, results, fields) {
            if (error) throw error;
            if (results.length > 0) {       // db에서의 반환값이 있으면 로그인 성공
                db.query('SELECT * FROM usertable WHERE username = ? AND comments = ? ', [username, question], function(err, results, fields){
                    var pwd=(results[0].password);
                    response.send(`<script type="text/javascript">alert("비밀번호는 ${pwd}입니다."); 
                document.location.href="/auth/findpassword";</script>`);  
                })

            } else {              
                response.send(`<script type="text/javascript">alert("키워드의 정보가 일치하지 않습니다."); 
                document.location.href="/auth/findpassword";</script>`);    
            }            
        });

    } else {
        response.send(`<script type="text/javascript">alert("아이디와 키워드가 입력되지 않았습니다."); 
        document.location.href="/auth/findpassword";</script>`);    
    }
});
// 회원가입 프로세스
router.post('/register_process', function(request, response) {    
    var username = request.body.username;
    var password = request.body.pwd;    
    var password2 = request.body.pwd2;
    var password3=request.body.pwd3

    if (username && password && password2&&password3) {
        
        db.query('SELECT * FROM usertable WHERE username = ?', [username], function(error, results, fields) { // DB에 같은 이름의 회원아이디가 있는지 확인
            if (error) throw error;
            if (results.length <= 0 && password == password2) {     // DB에 같은 이름의 회원아이디가 없고, 비밀번호가 올바르게 입력된 경우 
                db.query('INSERT INTO usertable (username, password,comments) VALUES(?,?,?)', [username, password,password3], function (error, data) {
                    if (error) throw error2;
                    response.send(`<script type="text/javascript">alert("회원가입이 완료되었습니다!");
                    document.location.href="/";</script>`);
                });
            } else if (password != password2) {                     // 비밀번호가 올바르게 입력되지 않은 경우
                response.send(`<script type="text/javascript">alert("입력된 비밀번호가 서로 다릅니다."); 
                document.location.href="/auth/register";</script>`);    
            }
            else {                                                  // DB에 같은 이름의 회원아이디가 있는 경우
                response.send(`<script type="text/javascript">alert("이미 존재하는 아이디 입니다."); 
                document.location.href="/auth/register";</script>`);    
            }            
        });

    } else {        // 입력되지 않은 정보가 있는 경우
        response.send(`<script type="text/javascript">alert("입력되지 않은 정보가 있습니다."); 
        document.location.href="/auth/register";</script>`);
    }
});

module.exports = router;