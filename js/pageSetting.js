$(document).ready(function(){
	fullset();
  headerClick();
	return fadeIn();
});
function fullset(){
	$("#fullpage header ul :first-child").addClass("active");
	// $("#fullpage .quick ul :first-child").addClass("on"); //일단 화면이 로드 되었을때는 퀵버튼에 1번째에 불이 들어오게
	//마우스 휠 이벤트
	$(window).on("wheel", function(event){
		var page = $("header ul li.active");

		//alert(page.index()+1);  // 현재 on 되어있는 페이지 번호
		if($("body").find("#fullpage:animated").length >= 1) return false;
		//마우스 휠을 위로
		//if(event.originalEvent.wheelDelta >= 0) {
		if (event.originalEvent.deltaY < 0) {
			var before=page.index();
			if(page.index() >= 0){
				page.prev().addClass("active").siblings(".active").removeClass("active");
			};//퀵버튼옮기기
			var pagelength=0;
			for(i=1; i<(before); i++){
				pagelength += $(".full"+i).height();
			}
			if(page.index() > 0){ //첫번째 페이지가 아닐때 (index는 0부터 시작임)
				page=page.index()-1;
				$("#fullpage").animate({"top": -pagelength + "px"},1000, "swing");
			}else{
				// 첫번째 페이지 입니다
			}	
		}else{ // 마우스 휠을 아래로	
			var nextPage=parseInt(page.index()+1); //다음페이지번호
			var lastPageNum=parseInt($("header ul li").length); //마지막 페이지번호
			//현재페이지번호 <= (마지막 페이지 번호 - 1)
			//이럴때 퀵버튼옮기기
			if(page.index() <= $("header ul li").length-1){ 
				page.next().addClass("active").siblings(".active").removeClass("active");
			}
			
			if(nextPage < lastPageNum){ //마지막 페이지가 아닐때만 animate !
				var pagelength=0;
				for(i = 1; i<(nextPage+1); i++){ 
					//총 페이지 길이 구하기
					//ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
					pagelength += $(".full"+i).height();
				}
				$("#fullpage").animate({"top": -pagelength + "px"},1000, "swing");
			}
			else{ // 현재 마지막 페이지 일때는
			};		
		}
		fadeIn();
	});

	
	$(window).resize(function(){ 
		//페이지가 100%이기때문에 브라우저가 resize 될때마다 스크롤 위치가 그대로 남아있는것을 방지하기 위해
		var resizeindex = $("header ul li.active").index()+1;
		
		var pagelength=0;
		for(i = 1; i<resizeindex; i++){ 
			//총 페이지 길이 구하기
			//ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
			pagelength += $(".full"+i).height();
		}

		$("#fullpage").animate({"top": -pagelength + "px"},0);
	});
}

//  상단 메뉴 클릭시 페이지 이동
// //  
function headerClick() {
	$("#top_menu li").click(function(){
		var gnbindex = $(this).index()+1;
		var length=0;

		for(i=1; i<(gnbindex); i++)
		{
			length+=$(".full"+i).height();
		}
		if($("body").find("#fullpage:animated").length >= 1) return false;
		$(this).addClass("active").siblings("li").removeClass("active");
		fadeIn();
		
		$("#fullpage").animate({"top": -length + "px"},800, "swing");
		return false;
	});

};

// 페이드인 식 수정 필요
function fadeIn(){
	var inner = $('.content_box .inner');
	var innerCheck = $('.content_box .inner.fade-in');
 
	innerCheck.removeClass('fade-in');

	if($('#top_menu li:nth-child(1)').attr('class')=="active"){
		$('.main_content .inner').addClass('fade-in');
	}else if($('#top_menu li:nth-child(2)').attr('class')=="active") {
		$('.about_content .inner').addClass('fade-in');
	}else if($('#top_menu li:nth-child(3)').attr('class')=="active") {
		$('.project_content .inner').addClass('fade-in');
	}else if($('#top_menu li:nth-child(4)').attr('class')=="active"){
		$('.contact_content .inner').addClass('fade-in');
	}
};


// 메인 레터링 애니메이션
////////수정중 
const text = document.querySelector("#main-phrase");
const strText = text.textContent;
const splitText = strText.split("");

for (let i=0; i< splitText.length; i++){
	text.innerHTM += "<span>" + splitText[i] + "</span>";
}
let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
	const span = text.querySelectorAll('span')[char];
	

	char++
	if(char === splitText.length){
		complete();
		return;
	};
};


function complete(){
	clearInterval(timer);
	timer=null;
};