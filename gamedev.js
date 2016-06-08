
var divName = 'character'; // div that is to follow the mouse (must be position:absolute)
var offX = 15;          // X offset from mouse position
var offy = 15;

function mouseX(evt) {if (!evt) evt = window.event; if (evt.pageX) return evt.pageX; else if (evt.clientX)return evt.clientX + (document.documentElement.scrollLeft ?  document.documentElement.scrollLeft : document.body.scrollLeft); else return 0;}


function follow(evt) {
    var obj = document.getElementById(divName).style;
    obj.left = (parseInt(mouseX(evt))+offX) + 'px';
    obj.top = (parseInt(mouseY(evt))+offY) + 'px'; 
    }
document.onmousemove = follow;




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

  