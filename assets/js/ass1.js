function w3_open() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}




$(".top1").click(function(e) {
    
	$(".bottom1").fadeToggle(2000);
	
});

$(".top2").click(function(e) {
    
	$(".bottom2").fadeToggle(2000);
	
});

$(".top3").click(function(e) {
    
	$(".bottom3").fadeToggle(2000);
	
});

$(".top4").click(function(e) {
    
	$(".bottom4").fadeToggle(2000);
	
});



var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

var x = setInterval(function(){
	
	
	
	var now = new Date().getTime();
	var distance = countDownDate - now;
	
	var days = Math.floor(distance / (1000*60*60*24));
	var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
	var mins = Math.floor((distance % (1000*60*60)) / (1000*60));
	var secs = Math.floor((distance % (1000*60)) / (1000));
	
	
	document.getElementById("demo1").innerHTML = days + " d";
	document.getElementById("demo2").innerHTML = hours + " h";
	document.getElementById("demo3").innerHTML = mins + " m";
	document.getElementById("demo4").innerHTML = secs + " s";
		
	
	if(distance<0){
		clearInterval(x);
		document.getElementById("demo").innerHTML = "EXPIRED";
	}
	
},1000);



console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);