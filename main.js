

function general() {
function toCapitalize() {
	var input = document.querySelector("#input").value;
	var h5 = document.querySelector("#h5")
	var submit = document.getElementById("submit")

	var str = input;
	var x = str.split(" ");  //["i","am","a","girl"]
	y = str.split(" ")
	for (var i = 0; i < x.length; i++) {
		x[i] = x[i].charAt(0).toUpperCase() + y[i].slice(1)
	}
h5.textContent =  x.join(" ");

}
toCapitalize(input)
}
submit.addEventListener("click", general)

