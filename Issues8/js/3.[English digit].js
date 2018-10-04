
var x= prompt("Enter long digit:","12345678");
var num = {
    number: parseInt(x),
    lastDigit: parseInt(x.substr(x.length - 1))
};
num.englishDigit = function () {
	switch(this.lastDigit) {
    case 0:
        alert("Last digit: zero");
        break;
    case 1:
        alert("Last digit: one");
        break;
    case 2:
        alert("Last digit: two");
        break;
    case 3:
        alert("Last digit: three");
        break;
    case 4:
        alert("Last digit: four");
        break;
    case 5:
        alert("Last digit: five");
        break;
    case 6:
        alert("Last digit: six");
        break;
    case 7:
        alert("Last digit: seven");
        break;
    case 8:
        alert("Last digit: eight");
        break;
    case 9:
        alert("Last digit: nine");
        break;

    default:
        alert("Nevalidni danni!");
        
}
};
var x=num.englishDigit();