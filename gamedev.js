

$(document).bind('mousemove', function(e){
    $('#character').css({
       left:  e.pageX + 20,
       top:   e.pageY
    });
});


 
    animateDiv();

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() ;
    var w = $(window).width() ;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
  //James change .a to .othercar
    $('.a').animate({ top: newq[0], left: newq[1] }, function(){
      animateDiv();        
    };
    
});

   