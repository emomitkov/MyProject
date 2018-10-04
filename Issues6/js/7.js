function divideBy7And5(args) {
		var num=parseInt(document.getElementById("ftext").value);
		if (num%7==0 && num%5==0) {
			alert("true " + num);
		} else {
			alert("false " + num);
		}
}