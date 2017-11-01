var slides = [
	{
		img: "image/comic1.jpg",
		label: "I am making crank call to Bao! "
	},
	{
		img: "image/comic2.jpg",
		label: "I am sorry! The number you dail is not in service, please check and dail again."
	},
	{
		img: "image/comic3.jpg",
		label: "That is so wired. Let me try again."
	},
	{
		img: "image/comic4.jpg",
		label: "I am sorry! The number you dail is not in service, please check and dail again"
	}
];

var i=0;
var slide = document.createElement("div");
slide.className ="slide";
var image= new Image();
var caption= document.createElement("p");
image.src=slides[i].img;
caption.textContent=slides[i].label;
slide.appendChild(image);
slide.appendChild(caption);
document.body.appendChild(slide);

var previous= document.getElementById("previous");
var next =document.getElementById("next");

previous.onclick =function(){
	if(i>0){
		i--;
		image.src=slides[i].img;
		caption.textContent = slides[i].label;
	}
}

next.onclick = function(){
	if(i< slides.length-1){
		i++;
		image.src=slides[i].img;
		caption.textContent = slides[i].label;
	}
}




