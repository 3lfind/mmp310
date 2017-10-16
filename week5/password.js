function makePasswd() {
  var passwd = '';
  var keyWord =document.getElementById('keyWord').value;
var number= document.getElementById('number').value;
  for (i=1; i<=number; i++) {
	 var length = keyWord.length;
    var c = Math.floor(Math.random()*length);
    passwd += keyWord.charAt(c)
  }
	return passwd;
}
var submit = document.getElementById('submit');

submit.onclick= function(){
	var userName= document.getElementById('userName');
	result.innerText="User Name: "+userName.value+"\n"+"password: " +makePasswd();
}
