var x = prompt("Please enter number", "0"),
	 	num = Number(x),
	 	arr=[],
	 	max=1,
	 	mostcommon=0;
	 		if(isNaN(num))
	 		{
	 			throw "Error: The arr.length is not convertible to Number";
	 		}
	 		else{
	 				 	for (var i = 0; i < num; i++) {
					 		var y = prompt("Please enter arr[" + i + "]" , "0");
					 		var num2= Number(y);
					 		if(isNaN(num2))
					 		{
					 			throw "Error: The arr[" + i + "] is not convertible to Number";
					 		}
					 		else{
					 			arr[i]=num2;
					 		}

					 	}
					 	if (num>0)
					 	{
					 		console.log(arr);	 		
					 	}
	 		}
arr.primeNumbers = function() {
	var result = [];
	for (var i = 0; i < this.length; i++) {
		if (this[i]%2==0) {
			result.push(this[i]);
		}
	}
	console.log("The even numbers in this array")
	console.log(result);
}
var z = arr.primeNumbers();