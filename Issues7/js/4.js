function sort() {
	var a=parseInt(document.getElementById("num1").value);
	var b=parseInt(document.getElementById("num2").value);
	var c=parseInt(document.getElementById("num3").value);

	if (a>b) {
		if (b>c) {
			document.getElementById("demo").innerHTML = a + " " + b + " " + c;
		} else {
			if (a>c) {
			document.getElementById("demo").innerHTML = a + " " + c + " " + b;
			}
			else{
				document.getElementById("demo").innerHTML = c + " " + a + " " + b;
			}
		}
	} else {
		if (b>c) {
			if (a>c) {
			document.getElementById("demo").innerHTML = b + " " + a + " " + c;
			}
			else{
				document.getElementById("demo").innerHTML = b + " " + c + " " + a;
			}
		} else {
			document.getElementById("demo").innerHTML = c + " " + b + " " + a;
		}
	}
}