function binarySearch() {
		var x = prompt("Please enter number", "0"),
	 	num = parseInt(x),
	 	arr=[];
	 	for (var i = 0; i < num; i++) {
	 		var y = prompt("Please enter arr[" + i + "]" , "0");
	 		var num2= parseInt(y);
	 		arr[i]=num2;
	 	}
	 	console.log(arr);
	 	arr.sort();
	 	console.log(arr);
	 	var z = prompt("Please enter number for searching", "0"),
	 		num3 = parseInt(z);	
	 	for (var i = 0; i < arr.length; i++) {
	 		var current=0;
	 		if (arr[i]==num3) {
	 			current = i;
	 			break;
	 		}
	 		else{
	 			current = -1;
	 		}
	 	}
	 	console.log(num3 + " is in arr[" + current + "] in sorted Array.");
}