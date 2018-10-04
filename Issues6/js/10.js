function pointInCircle() {
	var center={x:0, y:0};
	var r=2;
	var px=parseInt(document.getElementById("fx").value);
	var py=parseInt(document.getElementById("fy").value);	
	var point={x:px,y:py};
	if (point.x>=-1000 && point.x<=1000 && point.y>=-1000 && point.y<=1000) {
		//var boolean=Boolean((point.x - center.x)^2 + (point.y - center.y)^2 < r^2);
		//console.log(boolean);
		if ((point.x - center.x)^2 + (point.y - center.y)^2 < r^2) {
				document.getElementById("demo").innerHTML="no point: x= " + point.x + " , y= " + point.y;
		} else {
				document.getElementById("demo").innerHTML="yes point: x= " + point.x + " , y= " + point.y;

		}
	} else {
		alert("Nevalidni danni!");
	}
}