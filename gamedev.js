$(document).on('mousemove', function(e){
    $('#character').css({
       left:  e.pageX,
       top:   e.pageY
       position: absolute
    });
});

