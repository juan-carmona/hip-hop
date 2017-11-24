$(document).ready(function(){
        $(document).mousemove(function(ev){
        	var x = -ev.clientX/50;
        	var y = -ev.clientY/50;

        	$(".background3").css({
        		"backgroundPosition": x + "px " + y + "px"
        	});
        });
});