function thirdDigit() {
var number= document.getElementById("number").value;
var res = number.substring(number.length - 3);
var b=parseInt(res);
console.log(b)
b=parseInt(b/100);
console.log(b);
if (b==7) {
	document.getElementById("demo").innerHTML="N 7";
} else {
	document.getElementById("demo").innerHTML="false " + b;
}
}
