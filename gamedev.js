
var divName = 'character'; // div that is to follow the mouse (must be position:absolute)
var offX = 15;          // X offset from mouse position


function mouseX(evt) {if (!evt) evt = window.event; if (evt.pageX) return evt.pageX; else if (evt.clientX)return evt.clientX + (document.documentElement.scrollLeft ?  document.documentElement.scrollLeft : document.body.scrollLeft); else return 0;}


function follow(evt) {
    var obj = document.getElementById(divName).style;
    obj.left = (parseInt(mouseX(evt))+offX) + 'px';
    obj.top = (parseInt(mouseY(evt))+offY) + 'px'; 
    }
document.onmousemove = follow;

 $(document).ready(function(){
   var bodyHeight = $('body').height();
   var footerOffsetTop = $('#cheese').offset().top;
   var topToBottom = bodyHeight -footerOffsetTop;
    
  $('#cheese').css({top:'auto',bottom:topToBottom});
  $("#cheese").delay(100).animate({
    bottom: '50px',
    }, 1200);  
})

  function collision($character, $cheese) {
        var x1 = $character.offset().left;
        var y1 = $character.offset().top;
        var h1 = $character.outerHeight(true);
        var w1 = $character.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $cheese.offset().left;
        var y2 = $cheese.offset().top;
        var h2 = $cheese.outerHeight(true);
        var w2 = $cheese.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
      }