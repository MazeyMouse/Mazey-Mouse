
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
    bottom: '100px',
    }, 1200);  
})