var keyword = "room";
var room= document.getElementById('room');
var clearButton = document.getElementById('clear');
var context = room.getContext('2d');
context.strokeStyle ="#3D2910";
context.lineWidth=5;
var isDrawing = false;
var x = 0;
var y = 0;
var background = new Image();
//load image from flickr
    $(document).ready(function(){
		var id="137355827@N07";
		var set="72157690226925234";
        $.getJSON("https://api.flickr.com/services/feeds/photoset.gne?nsid="+id+"&set="+ set+
				  "&jsoncallback=?",
        {
			tag:keyword,
            tagmode: "any",
			format:"json"
			
        },
        function(data) {
            var random = Math.floor(Math.random() * data.items.length);
            var image_src = data.items[random]['media']['m'].replace("_m", "_b");
			background.src =image_src;
    });
background.onload = function(){
	context.drawImage(background,0,0,800,800);
	
}
//draw
function draw(event) {
  if (!isDrawing) {
    return;
  }
  context.beginPath();
  context.moveTo(x,y);
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();
  x=event.offsetX;
  y= event.offsetY;
}

room.addEventListener('mousemove', draw);
room.addEventListener('mousedown', (event) => {
  isDrawing = true;
  x=event.offsetX;
  y= event.offsetY;
});
room.addEventListener('mouseup', () => isDrawing = false );
room.addEventListener('mouseout', () => isDrawing = false );

//clear
function clear() {
  context.drawImage(background,0,0,800,800);
}
clearButton.addEventListener('click',clear);
});


//this is test upload