
var divName = 'character'; // div that is to follow the mouse (must be position:absolute)
var offX = 15;          // X offset from mouse position
var offY = 15;          // Y offset from mouse position

function mouseX(evt) {if (!evt) evt = window.event; if (evt.pageX) return evt.pageX; else if (evt.clientX)return evt.clientX + (document.documentElement.scrollLeft ?  document.documentElement.scrollLeft : document.body.scrollLeft); else return 0;}
function mouseY(evt) {if (!evt) evt = window.event; if (evt.pageY) return evt.pageY; else if (evt.clientY)return evt.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop); else return 0;}

function follow(evt) {
    var obj = document.getElementById(divName).style;
    obj.left = (parseInt(mouseX(evt))+offX) + 'px';
    obj.top = (parseInt(mouseY(evt))+offY) + 'px'; 
    }
document.onmousemove = follow;

<head>
    <script type="text/javascript">
    function rollover() {
      if (!document.getElementById) return
      var imgOrSrc;
      var imgPreload = new Array();
      var images = document.getElementsByTagName('img');
      for (var i = 0; i < images.length; i++) {
        if (images[i].getAttribute('rsrc')) {
          imgPreload[i] = new Image();
          imgPreload[i].src = images[i].getAttribute('rsrc');
          images[i].onmouseover = function() {
            imgOrSrc = this.getAttribute('src');
            this.setAttribute('src',this.getAttribute('rsrc'))
          }
          images[i].onmouseout = function() {
            this.setAttribute('src',imgOrSrc)
          }
        }
      }
    }
    </script>
    </head>
    <body onLoad="rollover()">
    <div id="landimage">
    <a href="linkhere"><img src="/images/braeden.png" rsrc="/images/braeden2.png" border="0"></a>
    </div>
    </body>
