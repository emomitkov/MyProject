var myObject={
	firstNumber: parseInt(prompt("Enter the first number:","0")),
    secondNumber:  parseInt(prompt("Enter the second number:","0")),
    thirdNumber: parseInt(prompt("Enter the third number:","0"))
};
    myObject.getMax= function() {
	var max=this.firstNumber;
	if(this.firstNumber>this.secondNumber && this.firstNumber>this.thirdNumber){
		max=this.firstNumber;
	}
	else{
		if(this.secondNumber>this.firstNumber && this.secondNumber>this.thirdNumber){
			max=this.secondNumber;
		}
		else{
			max=this.thirdNumber;
		}
	}
	alert("Max: " + max);
};

var x=myObject.getMax();