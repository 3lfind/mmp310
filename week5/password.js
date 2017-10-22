function makePasswd() {
  var passwd = '';
  var chart='';
  var random='';
  var letter="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~`|}{[]\:;?><,./-=1234567890";
  var keyWord =document.getElementById('keyWord').value;
	  var number= document.getElementById('number').value;
	for(i=1;i<=number-keyWord.length;i++){
		var a=Math.floor(Math.random()*letter.length);
		random += letter[a];
		console.log(random);
	}
	
  	for(i=1;i<=keyWord.length;i++){
	  var k =Math.floor(Math.random()*keyWord.length);
	  if(k ===i){
		 chart +=keyWord.charAt(k).toUpperCase();
	  }else{
		 chart +=keyWord.charAt(k).toLowerCase();
	  }
		console.log(chart);
	}
	passwd=  chart+random ;
	return passwd;
}

var submit = document.getElementById('submit');
submit.onclick= function(){
	var userName= document.getElementById('userName');
	result.innerText="User Name: "+userName.value+"\n"+"password: " +makePasswd();
}
