function solve(args) {
	var num=parseInt(document.getElementById("ftext").value);
	if (num>=-30 && num<=30){
		if (num%2==0) {
			alert("Your number " + num + " is EVEN!");
		} else {
			alert("Your number " + num + " is ODD!");
		}
    }
    else{
    	alert("Please type number between -30 and 30. Your number is " + num + ".");
    }
}
