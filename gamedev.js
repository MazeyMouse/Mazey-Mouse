

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
    });
    
};

$(document).ready(function() {

   var character = $("#character");
  $("gameover").hide();

   function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
    //below is an if statement - if the variables calculate to the right formula, it will return true or false
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }

  window.setInterval(function() {
    //function that makes the magic happen! Below, jQuery prints the word "FALSE" into #results
    
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('.a'), function() {
      if (collision($('#character'), $(this))) { //another if statement. If #myCar DOES hit something, the following will happen:
       
        //if #myCar hits .othercar, then #results will say "TRUE"
        $("#gameover").show().delay(200);

        //all the actions that happen during a collision go here

      }
    });
  }, 200); //this is how often it checks for a collision

});