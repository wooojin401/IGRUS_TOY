var _url = request.url;
var express = require('express')
var session = require('express-session')
var cookieParser=require('cookie-parser');
var bodyParser = require('body-parser');
var FileStore = require('session-file-store')(session)
var authRouter = require('./lib_login/auth.js');
var authCheck = require('./lib_login/authCheck.js');
var template = require('./lib_login/template.js');
const app = express()
const port = 3000

function check(){
    var frm = document.getElementById("form"); //주어진 문자열과 일치하는 id 속성을 가진 요소를 찾기
    var found = null;
    for(i = 0; i<4; i++){
        if (frm.item_list[i].check == true){
            found = frm.item_list[i].value;
        }
    }
    if (found == null){
        alert("하나 이상은 체크!");
        return false;
    }
}

<html>
<body>
    <h1>수강신청하기</h1>
    <form action = "/apply" method = "post" id = "form">
        <table width = "100%" border = "1">
            <tr><th>과목코드</th>
            <th width = "50%">과목명</th>
            <th>학년</th>
            <th>학점</th>
            <th>선택</th>
            </tr>
            <tr>
                <td>GEO3308-001</td>
                <td>데이터베이스</td>
                <td>3</td>
                <td>3</td>
                <td><input type = "checkbox" value = "web" id = "item_list"></input></td>
            </tr>
            <tr>
                <td>GEO3102-001</td>
                <td>공간분석</td>
                <td>3</td>
                <td>3</td>
                <td><input type = "checkbox" value = "web" id = "item_list"></input></td>
            </tr>
            <tr>
                <td>GEO3105-001</td>
                <td>사진측량학</td>
                <td>3</td>
                <td>3</td>
                <td><input type = "checkbox" value = "web" id = "item_list"></input></td>
            </tr>
            <tr>
                <td>GEO3108-001</td>
                <td>환경지구정보학</td>
                <td>3</td>
                <td>3</td>
                <td><input type = "checkbox" value = "web" id = "item_list"></input></td>
            </tr>
        </table>
        <p align = "right"><input type = "submit" value = "수강신청"></input></p>
    </form>
</body>


<body>
    <h1>수강신청내역</h1>
    <form action = "/apply" method = "post" id = "form">
        <table width = "100%" border = "1">
            <tr><th>과목코드</th>
            <th width = "50%">과목명</th>
            <th>학년</th>
            <th>학점</th>
            <th>선택</th>
            </tr>
            <tr id="add_1" class="temp_1">
                        <td class="deltd_1"></td>
                        <td class="deltd_1"></td>
                        <td class="deltd_1"></td>
                        <td class="deltd_1"></td>
                        <td><input type ="button" value="취소" class="delete_btn_1"/></td> 
                    </tr>
                    
                    <tr id="add_2" class="temp_2">
                        <td class="deltd_2"></td>
                        <td class="deltd_2"></td>
                        <td class="deltd_2"></td>
                        <td class="deltd_2"></td>
                        <td><input type ="button" value="취소" class="delete_btn_2"/></td>
                    </tr>
                    <tr id="add_3" class="temp_3">
                        <td class="deltd_3"></td>
                        <td class="deltd_3"></td>
                        <td class="deltd_3"></td>
                        <td class="deltd_3"></td>
                        <td><input type ="button" value="취소" class="delete_btn_3"/></td>
                    </tr>
                    
                    <tr id="add_4" class="temp_4">
                        <td class="deltd_4"></td>
                        <td class="deltd_4"></td>
                        <td class="deltd_4"></td>
                        <td class="deltd_4"></td>
                        <td><input type ="button" value="취소" class="delete_btn_4"/></td>
                    </tr>

        </table>
    </form>
</body>
</html>
