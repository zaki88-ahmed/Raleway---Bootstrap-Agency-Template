

$("#person ul li").click(function(e) {
    
	var c = $(this).attr("class");
	
	$("#"+c).siblings().css("z-index","0");
	$("#"+c).css("z-index","5");
	
});




