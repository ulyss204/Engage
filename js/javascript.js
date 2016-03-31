
var sign = document.getElementById("sign");
var disp = document.getElementById("disp");
sign.addEventListener("click", function(){
	this.classList.toggle("date__sign1");
	disp.classList.toggle("display");
})