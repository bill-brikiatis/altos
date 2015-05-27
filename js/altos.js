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
		if($(this).children("ul.sub_menu").length){
			$(this).children("ul.sub_menu").toggle();
		}
	});

	$("#close").click(function(){
		location.reload(true);
	});

	$(window).resize(function(){
		if($(window).width() > 699){
			$(".arrow-down").css("display", "none");
		}
	});

	if($(window).width() > 699){
		$(".arrow-down").css("display", "none");
	}

	var first = $("ul li.top:first");
	var last = $("ul li.top:last");
	first.appendTo(first.parent());
	last.prependTo(last.parent());
	
});
