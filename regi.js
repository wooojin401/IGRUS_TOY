<!doctype html>
<html>
<head>
<meta charsrt = "utf-8">
<title>시간표</title>
<meta name = "viewport" content = "width=device-width, initial-scale=1.0">

<script>
var cnt = 1;
var jbAry = []

$(document).ready(function(){
	
	$(".list_btn_1").click(function(){
		var str= " "
		var list_btn = $(this);
		var tdArr = new Array(); 
		var tr = list_btn.parent().parent();
		var td = tr.children();
		
		var jbResult = jQuery.inArray( 'a', jbAry );
		if (jbResult!=-1){
			alert("이미 신청한 과목(동일과목) 입니다!")
			return false;
		}
		
		for(var i=1; i<10 ; i++){
		var sh = $(".temp_"+cnt+" td:nth-child("+i+")"); //1 child() 여기 안에는 이수구분  값의 위치 1~9
		 sh.each(function(index, value){
			 if($(value).text()==''){ value.append(td.eq(i-1).text(),);
			 }
			
			 
			 
			
	});
	}	
		jbAry.push("a");
		
		
		cnt+=1;	
		
		

	
	$(".list_btn_2").click(function(){
		var str= " "
		var list_btn = $(this);
		var tdArr = new Array(); 
		var tr = list_btn.parent().parent();
		var td = tr.children();
		
		var jbResult = jQuery.inArray( 'b', jbAry );
		if (jbResult !=-1){
			alert("이미 신청한 과목(동일과목) 입니다!")
			return false;
		}
		
		for(var i=1; i<10 ; i++){
		var sh = $(".temp_"+cnt+" td:nth-child("+i+")"); //1 child(?) 여기 안에는 이수구분  값의 위치 1~9
		 sh.each(function(index, value){
			 if($(value).text()==''){ value.append(td.eq(i-1).text(),);
			 } 
			 
			 
			
		});
		}
		
		jbAry.push("b");
		cnt+=1;	

}); 

	$(".list_btn_3").click(function(){
		var str= " "
		var list_btn = $(this);
		var tdArr = new Array(); 
		var tr = list_btn.parent().parent();
		var td = tr.children();
		
		var jbResult = jQuery.inArray( 'c', jbAry );
		if (jbResult !=-1){
			alert("이미 신청한 과목(동일과목) 입니다!")
			return false;
		}
		
		
		for(var i=1; i<10 ; i++){
		var sh = $(".temp_"+cnt+" td:nth-child("+i+")"); //1 child(?) 여기 안에는 이수구분  값의 위치 1~9
		 sh.each(function(index, value){
			 if($(value).text()==''){ value.append(td.eq(i-1).text(),);
			 } 
			 
			 
			
		});
		}
		jbAry.push("c");
		cnt+=1;	

}); 	
	$(".list_btn_4").click(function(){
		var str= " "
		var list_btn = $(this);
		var tdArr = new Array(); 
		var tr = list_btn.parent().parent();
		var td = tr.children();

		var jbResult = jQuery.inArray( 'd', jbAry );
		if (jbResult !=-1){
			alert("이미 신청한 과목(동일과목) 입니다!")
			return false;
		}
		
		
		for(var i=1; i<10 ; i++){
		var sh = $(".temp_"+cnt+" td:nth-child("+i+")"); //1 child(?) 여기 안에는 이수구분  값의 위치 1~9
		 sh.each(function(index, value){
			 if($(value).text()==''){ value.append(td.eq(i-1).text(),);
			 } 
			 
			 
			
		});
		}
		jbAry.push("d");
		cnt+=1;	

}); 	
	$(".list_btn_5").click(function(){
		var str= " "
		var list_btn = $(this);
		var tdArr = new Array(); 
		var tr = list_btn.parent().parent();
		var td = tr.children();
		
		var jbResult = jQuery.inArray( 'e', jbAry );
		if (jbResult !=-1){
			alert("이미 신청한 과목(동일과목) 입니다!")
			return false;
		}
		
		
		for(var i=1; i<10 ; i++){
		var sh = $(".temp_"+cnt+" td:nth-child("+i+")"); //1 child(?) 여기 안에는 이수구분  값의 위치 1~9
		 sh.each(function(index, value){
			 if($(value).text()==''){ value.append(td.eq(i-1).text(),);
			 } 
			 
			 
			
		});
		}
		jbAry.push("e");
		cnt+=1;	

});
	
	
$(".delete_btn_1").click(function(){
		jbAry.pop("a")
		$(".deltd_1").empty();
	});
	
	
	$(".delete_btn_2").click(function(){
		jbAry.pop("b")
		$(".deltd_2").empty();

	});
	
	
	$(".delete_btn_3").click(function(){
		jbAry.pop("c")
		$(".deltd_3").empty();

	});
	
	
	$(".delete_btn_4").click(function(){
		jbAry.pop("d")
		$(".deltd_4").empty();

	});
	$(".delete_btn_5").click(function(){
		jbAry.pop("e")
		$(".deltd_5").empty();

		
	});
	


</script>

<style type="text/css">
* {
  box-sizing : border-box;
  padding: 0;
  margin: 0 auto;
  }
  

#head_bar{
	overflow:visible;
	height:70px;
	width:2000px;
	background-color: #dadada;
}

#head_bar .one{
	float:left;
	height:70px;
	width:200px;
	font-size:20px;
	text-align: center;
	line-height:70px;
	background-color: #094a9a;
	color:#fff;
	box-sizing: border-box;
	margin-right: 200px;

}

#head_bar .ttt{
	float:left;
	height:70px;
	width:200px;
	line-height:70px;
	text-align: center;
	font-size:20px;
	margin-right:-50px;

	

}

#head_bar .ttt_1{
	float:left;
	background-color: white;
	text-align: center;
	line-height:60px;
	height:60px;
	width:200px;
	font-size:20px;
	border:solid 1px black;
	margin :5px;
}

#btn_bar {
	margin :5px;
}

#btn_bar .btn{
	float:left;
	background-color: #094a9a;
	width:100x;
	height:50px;
	margin-right:10px;
	text-align: center;
	color:#fff;
	margin-bottom: 20px;
}

#list_head {
	height:450px;
	width:2000px;
	text-align: center;
	margin-left: 0px;
	white-space:nowrap;
}

#sub_list {
	float:left;
	text-align: center;
	height:400px;
	width:1800px;
	margin-left: 5px;
	border-collapse : collapse;
	margin-bottom: 20px;

 }
 .tr th{
  background-color: #dadada;
 }
 
.list_btn
{
	height:35px;
	width:45px;
	background-color: #094a9a;
	color:#fff;
}
.jpg{
float:left;
	width:30px;
	height:30px;
	background-color: #094a9a;
	color:#fff;
	text-align: center;
	font-size:15px;


}

#list_jpg
{
	float:left;
	width:1000px;
	margin-bottom: 20px;
}

#last_list
{
    float:left;
	text-align: center;
	height:210px;
	width:1800px;
	margin-left: 5px;
	border-collapse : collapse;
	margin-bottom: 20px;
	table-layout: fixed;
}

</style>

<body>

    <div id="head_bar">
        <div class="one">2023년도 1학기</div>
        <div class="ttt"> 교육과목 </div>
        
        
        
        <div class="ttt"> 성명 </div>
        <div class="ttt_1"></div>
        
        <div class="ttt"> 차시 </div>
        <div class="ttt_1">2차시</div>
    </div>
    
    
    <div id="btn_bar">
        <input type="button" value="    전공과목       " class="btn" />
        <input type="button" value="    교양과목        " class="btn"/>
        <input type="button" value="    타학과과목      " class="btn"/>
        <input type="button" value="    연계학과과목      " class="btn"/>
        <input type="button" value="    과목명(코드)조회 " class="btn"/>
        <input type="button" value="    공지사항   " class="btn"/>
    </div>
    
    
    <div id="list_head">
        <table border="1" id="sub_list">
        <tr class="tr">
            <th>학년</th>
            <th>이수구분</th>
            <th>학수번호</th>
            <th>교과목명</th>
            <th>학점</th>
            
            <th>요일 및 교시(강의실)</th>
            <th>개설학과</th>
            <th>교강사</th>
            <th>신청</th>
            </tr>
		</table>
	</div>
                <tr>
                    <td>3</td>
                    <td>전공필수</td>
                    <td>GEO3102-001</td>
                    <td>공간분석</td>
                    <td>3</td>
                    
                    <td>수 4 5 6 7,목 13 14 15(4-335)</td>
                    <td>공간정보 공학과</td>
                    <td>홍성철</td>
                    <td><input type ="button" value="신청" class="list_btn_1" /></td>
                </tr>
                
                <tr>
                    <td>3</td>
                    <td>전공필수</td>
                    <td>GEO3105-001</td>
                    <td>사진측량학</td>
                    <td>3</td>
                  
                    <td>화 9 10 11 12, 목 9 10 11 12(4-320)</td>
                    <td>공간정보 공학과</td>
                    <td>김태정</td>
                    <td><input type ="button" value="신청" class="list_btn_2"/></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>전공선택</td>
                    <td>GEO3108-001</td>
                    <td>환경지구 정보학</td>
                    <td>3</td>
                    
                    <td>월 13 14 15, 수 13 14 15(4-320)</td>
                    <td>공간정보 공학과</td>
                    <td>박노욱</td>
                    <td><input type ="button" value="신청" class="list_btn_3"/></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>교양필수</td>
                    <td>GEO2011-001</td>
                    <td>공간정보 수치해석</td>
                    <td>3</td>
                    
                    <td>월 10 11 12, 수 10 11 12(4-320)</td>
                    <td>공간정보 공학과</td>
                    <td>최강혁</td>
                    <td ><input type ="button" value="신청" class="list_btn_4"/></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>전공선택</td>
                    <td>GEO3308-001</td>
                    <td>데이터 베이스</td>
                    <td>3</td>
                    
                    <td>화 1 2 3, 수 1 2 3(4-335)</td>
                    <td>공간정보 공학과</td>
                    <td>박수홍</td>
                    <td><input type ="button" value="신청" class="list_btn_5" /></td>
					</tr>
        
                
    
        
        <div id="list_jpg">

            <div class="jpg">
            
            </div>
        
            <div>
                 수강신청내역
            </div>
        
        </div>
        <div class= "temp_bar">
            <table border="1" id="last_list">
                <tr class="tr" id="chk_append">
                    <th>주차</th>
                    <th>이수구분</th>
                    <th>학수번호</th>
                    <th>교과목명</th>
                    <th>학점</th>
                    <th>요일 및 교시(강의실)</th>
                    <th>개설학과</th>
                    <th>교강사</th>
                    <th>신청</th>
                    </tr>
                    
                    <tr id="add_1" class="temp_1">
                        <td class="deltd_1"></td>
                        <td class="deltd_1"></td>
                        <td class="deltd_1"></td>
                        <td class="deltd_1"></td>
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
                        <td class="deltd_4"></td>
                        <td class="deltd_4"></td>
                        <td class="deltd_4"></td>
                        <td class="deltd_4"></td>
                        <td><input type ="button" value="취소" class="delete_btn_4"/></td>
                    </tr>
                    <tr id="add_5" class="temp_5">
                        <td class="deltd_5"></td>
                        <td class="deltd_5"></td>
                        <td class="deltd_5"></td>
                        <td class="deltd_5"></td>
                        <td class="deltd_5"></td>
                        <td class="deltd_5"></td>
                        <td class="deltd_5"></td>
                        <td class="deltd_5"></td>
                        <td><input type ="button" value="취소" class="delete_btn_5"/></td>
                    </tr>
            </table>
            </div>
</body>
</html>
