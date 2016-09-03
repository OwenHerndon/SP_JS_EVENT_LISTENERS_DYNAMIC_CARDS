document.getElementById('create').addEventListener('click', makeCard);
document.getElementById('delete').addEventListener('click', deleteCard);

function makeCard(){
	document.getElementById("output").innerHTML = "<div class='box'> </div>";
}

function deleteCard(){
	document.getElementById("output").innerHTML = "";
	}