var $mouseX = 0, $mouseY = 0;
var $xp = 0, $yp =0;

$(document).mousemove(function(e){
    $mouseX = e.pageX;
    $mouseY = e.pageY;    
});

var $loop = setInterval(function(){
$xp += (($mouseX - $xp)/12);
$yp += (($mouseY - $yp)/12);
$("#character").css({left:$xp +'px', top:$yp +'px'});  
}, 30);

