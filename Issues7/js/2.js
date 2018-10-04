function multiplicationSign() {
	var a=parseInt(document.getElementById("num1").value);
	var b=parseInt(document.getElementById("num2").value);
	var c=parseInt(document.getElementById("num3").value);
	if (a==0 || b==0 || c==0) {
		document.getElementById("demo").innerHTML = " 0 ";
	} else {
		if (a<0) {
			if (b<0) {
				if (c<0) {
					document.getElementById("demo").innerHTML = " - ";
				} else {
					document.getElementById("demo").innerHTML = " + ";
				}
			} else {
				if (c<0) {
					document.getElementById("demo").innerHTML = " + ";
				} else {
					document.getElementById("demo").innerHTML = " - ";
				}
			}
		} else {
			if (b<0) {
				if (c<0) {
					document.getElementById("demo").innerHTML = " + ";
				} else {
					document.getElementById("demo").innerHTML = " - ";
				}
			} else {
				if (c<0) {
					document.getElementById("demo").innerHTML = " - ";
				} else {
					document.getElementById("demo").innerHTML = " + ";
				}
			}

		}
	}	
}