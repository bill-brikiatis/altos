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
		$($(this).toggleClass("menu_under"));
		if($(this).children("ul.sub_menu").length){
			$(this).children("ul.sub_menu").toggle();
			$("div.view").toggleClass("highlight");
		}
	});

	$("#close").click(function(){
		location.reload(false); /* false to get page from cache */
	});

	// Shows & hides sub menu arrow.

	function toggleArrow(){
		if($(window).width() > 699){
			$(".arrow-down").css("display", "none");
			$("#search").css("display", "none");
			$("#page-wrap").css("margin", "0 auto");
		}
		else{
			$(".arrow-down").css("display", "inline-block");
		}
	}

	$(window).resize(function(){
		toggleArrow();
	});

	toggleArrow();


	//refresh page on browser resize
	$(window).bind('resize', function(e){
  		if (window.RT) clearTimeout(window.RT);
  		window.RT = setTimeout(function(){
    		this.location.reload(false); /* false to get page from cache */
  		}, 200);
	});


// Changes background image, mountain name. Takes in elements, path to image
	function changeBackground(el_id_1, el_id_2, img){
		$(el_id_1).css('background-color', '#fff');
		$(el_id_2).css('background-color', 'transparent');
		$("html").css({
			background : 'url(' + img + ') no-repeat center top fixed',
			backgroundSize : 'cover'
		});
		$('#real_name').toggle();
		$('#blue_name').toggle();
	}

	$("#bar2").click(function(){
		var el_id_1 = "#bar2";
		var el_id_2 = "#bar1";
		var img = "images/blue_full.png";
		changeBackground(el_id_1, el_id_2, img);
	});

	$("#bar1").click(function(){
		var el_id_1 = "#bar1";
		var el_id_2 = "#bar2";
		var img = "images/real_full.png";
		changeBackground(el_id_1, el_id_2, img);
	});
	
}); //document.ready
