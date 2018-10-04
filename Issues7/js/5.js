function digitAsWord() {
	var a=parseInt(document.getElementById("num1").value);
	switch(a) {
    case 0:
        document.getElementById("demo").innerHTML = "zero";
        break;
    case 1:
        document.getElementById("demo").innerHTML = "one";
        break;
    case 2:
        document.getElementById("demo").innerHTML = "two";
        break;
    case 3:
        document.getElementById("demo").innerHTML = "three";
        break;
    case 4:
        document.getElementById("demo").innerHTML = "four";
        break;
    case 5:
        document.getElementById("demo").innerHTML = "five";
        break;
    case 6:
        document.getElementById("demo").innerHTML = "six";
        break;
    case 7:
        document.getElementById("demo").innerHTML = "seven";
        break;
    case 8:
        document.getElementById("demo").innerHTML = "eight";
        break;
    case 9:
        document.getElementById("demo").innerHTML = "nine";
        break;
    default:
        document.getElementById("demo").innerHTML = "Not a digit.";
}
}