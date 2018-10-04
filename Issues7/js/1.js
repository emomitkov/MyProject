function ifGreater(){
	var a=parseFloat(document.getElementById("num1").value);
	var b=parseFloat(document.getElementById("num2").value);
	var c;
	if (a>b) {
		c=b;
		b=a;
		a=c;
		document.getElementById("demo").innerHTML = a + " " + b;
	} else {
		document.getElementById("demo").innerHTML = a + " < " + b;
	}
}