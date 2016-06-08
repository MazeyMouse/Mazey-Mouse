$(document).bind('mousemove', function(e){
    $('#character').css({
       left:  e.pageX + 20,
       top:   e.pageY
    });
});