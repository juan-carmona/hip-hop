$(document).ready(function(){
        $(document).mousemove(function(ev){
        	var x = ev.clientX/50;
        	var y = ev.clientY/50;

        	$(".backstretch img").css({
        		"left": -x + "px ",
        		"margin-top": -y + "px",
        		"right": x + "px ",
        		"bottom": y + "px"
        	},5000);
        });

	$.backstretch([
		"../img/city-1.jpg",
		"../img/city-2.jpg",
		"../img/city-3.jpg",
		"../img/city-4.jpg",
		"../img/city-5.jpg"
	],{
		fade:750,
		duration:7000
	});
});