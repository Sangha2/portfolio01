$(document).ready(function(e) {
	$("#menu li:eq(0) a").css("color","#fff"); //첫 번재 메뉴 컬러
	
		//모든 버튼 호버시 색상 변경
	$("a").hover(
		function(e){ //오버시
			$(this).css("font-weight","bold")
			$(this).find(".lineEvent").css("width","78px")
		},
		function(){ //아웃시
			$(this).css("color","#fff")
			$(this).css("font-weight","normal")
			$(this).find(".lineEvent").css("width","0")
		});
	
	
	//fullpage설정
    $("#fullpage").fullpage({
		css3:false,
		menu:"#menu",//메뉴로 사용할 box아이디
		anchors:["page1","page2","page3","page4","page5","page6","page7","page8","page9","page10","page11"],

		//페이지가 이동 완료 후 설정코드 넣기
		afterLoad:function(anchorLink, index){
			//anchorLink 는 도착페이지 연결 번호
			//index - 도착페이지의 인덱스번호 (1번부터)
			$("#menu li a").css("color"," #fff"); //초기화
			$("#menu li a li a").css("color"," #fff"); //초기화
			$("#menu li:eq("+(index-1)+") a").css("color","#fff"); //해당 페이지 변경
			
			
			
			
		},
		onLeave:function(index, nextindex, direction){
			//모바일 버전 메뉴바 색 변경
			var currW = $(window).width();//현재창 가로크기
			var currC= $("#fullpage>.section").eq(nextindex-1).css("background-color");//현재 백그라운드 컬러
			//alert(currC);
			if( currW <= 1080){
			$("#header, #menu").css({backgroundColor:currC});
			}
		}
		
		
	}); //fullpage 
	
	//모바일 메뉴 보이기
	$("#logo").toggle(function(){
		$("#menu").animate({top:"10vh"},500)},
		function(){
		$("#menu").animate({top:"-60vh"},500);
	});//toggle
	$("#btnx").click(function(){
		$(this).css("color","#fff");
		$("#menu").animate({top:"-60vh"},500);		
		})
		
		

	
	
	

	
	
 }); //jQb

// JavaScript Document

