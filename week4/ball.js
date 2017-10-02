var answers=["Shake again","Be careful","Admit Mistakes","She/He will refuse","Go ahead","Absolutely","Luck is with you","Today is the day","No!No!No!","lol" ];
var answer=document.getElementById("answer");
answer.onclick =function(){
	var question=document.getElementById("question");
	var answer =answers[Math.floor(Math.random()*answers.length)];

	response.innerText= question.value +" answer:"+answer;
	
}

