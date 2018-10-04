function display() {
	var a=parseInt(document.getElementById("num1").value);
	var s = "";
	for (var i = 1; i <= a; i++) {
 		  s += i + " ";
	}
	document.getElementById("demo").innerHTML=s;
}