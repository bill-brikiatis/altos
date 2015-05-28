$(document).ready(function(){
	$("#mobileDropdown").click(function(){
		$("#page-wrap").css("marginLeft", "-240px");
		$("#search").css({
			display : "block", 
			margin: "-60px 0 0 280.1px",
			width : "97%",
			background : "#000"
		});
		$('nav').css({
			display: "block",
			margin: "0 0 -240px 280.1px",
			width: "97%",
		});
		$("#mobileDropdown").css("display", "none");
		$("div#close > i").css("display", "block");
	});

	$("li.top").click(function(){
		$($(this).css("border-bottom", "1px solid white"));
		if($(this).children("ul.sub_menu").length){
			$(this).children("ul.sub_menu").toggle();
		}
	});

	$("#close").click(function(){
		location.reload(true);
	});

	function toggleArrow(){
		if($(window).width() > 699){
			$(".arrow-down").css("display", "none");
			console.log("this is if");
		}
		else{
			$(".arrow-down").css("display", "inline-block");
			console.log("this is else");
		}
	}

	$(window).resize(function(){
		toggleArrow();
	});

	toggleArrow();
	
});
