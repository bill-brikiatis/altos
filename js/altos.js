$(document).ready(function(){
	$("#mobileDropdown").click(function(){
		//$("#logo").css("display", "none");
		//$("#bag").css("display", "none");
		//$("#mobileDropdown").css("display", "none");
		$("#page-wrap").css("marginLeft", "-240px");
		$("#search").css({
			display : "block", 
			margin: "-60px 0 0 280.1px",
			width : "97%",
			background : "#000"
		});
		$("#mobileDropdown").css("display", "none");
		$("div#close > i").css("display", "block");
	});
});


