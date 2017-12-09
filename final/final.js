var wall= document.getElementById('wall');
var context = wall.getContext('2d');
context.strokeStyle="#BFBFBF";
var me = true;
var background = new Image();
background.src = "images/back.jpg";

background.onload = function(){
	context.drawImage(background,0,0,800,800);
	board();
}
var board = function(){
for(var i=0; i<25; i++){
// 纵线
	context.moveTo(25 + i*20, 25);
	context.lineTo(25 + i*20,485);
	context.stroke();
//横线
	context.moveTo(25, 25 +i*20);
	context.lineTo(485, 25+ i*20);
	context.stroke();
}
}
var onestep = function(i,j,me){
	context.beginPath();
	context.arc(25 + i*20,25+j*20,25, 0, 2*Math.PI);
	context.closePath();
	var gradient = context.createRadialGradient(25+i*20+2,25+j*20-2,25,25+i*20+2,25+j*20-2,0);//20半径
	if(me){
		gradient.addColorStop(0,"#A0A0A0");
	gradient.addColorStop(1,"#636766");
	}else{
		gradient.addColorStop(0,"#D1D1D1");
		gradient.addColorStop(1,"#F9F9F9");
	}
	context.fillStyle=gradient;
	context.fill();
}
	 
wall.onclick = function(event){
		var x = event.offsetX;
		var y = event.offsetY;
		var i = Math.floor(x/20);
		var j = Math.floor(y/20);
		onestep(i,j, me);
		me = !me;
	}


