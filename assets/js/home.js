

$("#tool-box i").click(function() {
	
	$("#tool-box .color-box").fadeToggle();
    
});





var x = $(".color-box ul li");

x.eq(0).css("background-color","#06f");
x.eq(1).css("background-color","#c66");
x.eq(2).css("background-color","#69f");
x.eq(3).css("background-color","#fc3");

x.click(function(e) {
    
	$(".change").css("color",$(this).css("background-color"));
	
});



$(function(){
	
	
	$("#loading").fadeOut(2000);
	
	})
	
	
	
	

$(function() {
  $('.skitter-large').skitter();
});


$("body").niceScroll({
  cursorcolor:"aquamarine",
  cursorwidth:"16px",
  cursorcolor:"#09c",
  cursoropacitymin:0.5,
  cursorradius:"50px"
});




/*var canvas = new fabric.Canvas('c1');
	 
	 $(".addCircle").click(
	 function()
	 {
  canvas.add(new fabric.Circle({ radius: 80, fill: '#f55', top: 150, left: 150 }));

  canvas.selectionColor = 'rgba(0,255,255,0.3)';
  canvas.selectionBorderColor = '#09c';
  canvas.selectionLineWidth = 5;
  this.__canvases.push(canvas);
	 })*/
	 
	 
	 
	 
var canvas = new fabric.Canvas('c1');

$(".addCircle").click(function(e) {
    
	canvas.add(new fabric.Circle({radius: 80, fill: '#f55', top: 150, left: 150}));
	canvas.selectionColor = 'rgba(0,255,255,0.3)';
	canvas.selectionBorderColor = '#09c';
	canvas.selectionLineWidth = 5;
	this.canvases.push(canvas);
	
});


var canvas1 = new fabric.Canvas('a');

// create a rectangle object
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20
});

// "add" rectangle onto canvas
canvas1.add(rect);





	var canvas2 = new fabric.Canvas('b');
	canvas2.add(new fabric.Circle({radius: 60, fill: 'green', top: 120, left: 110}));
    	

    
	
	












