    var submit = document.getElementById("submit");
submit.onclick = function(){
    var name = document.getElementById("name");
    var place = document.getElementById("place");
    var illness = document.getElementById("illness");
    var number = document.getElementById("number");
    var adjective = document.getElementById("adjective");
    var date = document.getElementById("date");
   // var note = document.getElementById("note");
    
    if(number.value){
         note.innerText = name.value +" could not go to "+place.value+" today. She/he had a horrible " + illness.value + " because she/he drank "+number.value+" cups of coffee. She/he needs to see Doctor "+ adjective.value + " today. Please accept this written notification of my abesence on " + date.value+".";
    }else{
         note.innerText ="Please enter a number!";
        
    }
    
  
}