function theBiggestOfThree() {
	var a=parseInt(document.getElementById("num1").value);
	var b=parseInt(document.getElementById("num2").value);
	var c=parseInt(document.getElementById("num3").value);
	if (a>b) {
		if (a>c) {
			document.getElementById("demo").innerHTML = a;
		} else {
			document.getElementById("demo").innerHTML = c;
		}
	} else {
		if (b>c) {
			document.getElementById("demo").innerHTML = b;
		} else {
			document.getElementById("demo").innerHTML = c;
		}
	}
}