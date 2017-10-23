window.addEventListener("load", function() {
	
	var submit = document.getElementById("submit");
	var list =document.getElementById("list");
	var input = document.getElementById("item");
	submit.addEventListener("click", addItem);
	input.addEventListener("keydown", function(event) {
		if (event.key == "Enter") {
			addItem();
		}
	});
	
	function addItem() {
		var listItem = document.createElement("div");
		var newItem = document.createElement("ul");
		listItem.className = "list";
		newItem.innerText = input.value;
		newItem.className = "item";
		listItem.appendChild(newItem);
		var del = document.createElement("button");
		del.className = "delete";
		del.innerText = "Delete";
		del.addEventListener("click", function() {
			list.removeChild(this.parentNode);
		});
		listItem.appendChild(del);
		list.appendChild(listItem);
	}

});