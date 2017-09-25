var submit = document.getElementById('submit');
submit.onclick=function(){
	var inputs = document.getElementById('questions').getElementsByTagName('input');
	var num =0;
	if(inputs[0].value=="7"){
		num++;
	}else{
		hint1.innerText ="Hint: 12-5";
	}
	if(inputs[1].value =="true"){
		num++;
	}else{
		hint2.innerText ="Hint: -2^3=8; （-2）^3=8";
	}
	if(inputs[2].value =="9"){
		num++;
	}else{
		hint3.innerText ="Hint: one dozen is 12 eggs";
	}
	if(inputs[3].value =="false"){
		num++;
	}else{
		hint4.innerText ="Hint: Not just count the small squares";
	}
	results.innerText ="your score is "+num*25;
}