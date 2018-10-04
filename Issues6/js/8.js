function rectangles() {
		var width=parseFloat(document.getElementById("width").value);
		var height=parseFloat(document.getElementById("height").value);
		if (width>0 && height>0) {
			var perimetur=2*height + 2*width;
			var area=width*height;
			document.getElementById("parametur").innerHTML = "The rectangle's perimeter is " + perimetur + ".";
			document.getElementById("area").innerHTML = "The rectangle's area is " + area + ".";
		} else {
			alert("Height and width must be greater than 0.");
		}


}