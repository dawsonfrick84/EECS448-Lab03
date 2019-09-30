//manipulate.js

function change() {
	var dummy = document.getElementById("dummy");

	var border_red = document.querySelector("#border_red").value;
	var border_green = document.querySelector("#border_green").value;
	var border_blue = document.querySelector("#border_blue").value;

	var border_width = document.querySelector("#border_width").value;

	var background_red = document.querySelector("#background_red").value;
	var background_green = document.querySelector("#background_green").value;
	var background_blue = document.querySelector("#background_blue").value;

	dummy.style.borderColor = "rgb(" + border_red + "," + border_green + "," + border_blue + ")";
	dummy.style.borderWidth = "" + border_width;
	dummy.style.backgroundColor = "rgb(" + background_red + "," + background_green + "," + background_blue + ")";
}
