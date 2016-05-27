<head>
<style>
#character {position:absolute;display:none;color:white;background-color:black}
#onme {width:150px;height:80px;background-color:yellow;cursor:pointer}
</style>
<script type="text/javascript">
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
</script>
</head>
<body>
<div id="character">test</div>
<br><br>
<div id='onme' onMouseover='document.getElementById(divName).style.display="block"' onMouseout='document.getElementById(divName).style.display="none"'>Mouse over this</div>
</body>

