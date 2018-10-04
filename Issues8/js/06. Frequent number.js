function frequentNumber() {
	var x = prompt("Please enter number", "0"),
	 	num = parseInt(x),
	 	arr=[],
	 	max=1,
	 	mostcommon=0;
	 	for (var i = 0; i < num; i++) {
	 		var y = prompt("Please enter arr[" + i + "]" , "0");
	 		var num2= parseInt(y);
	 		arr[i]=num2;
	 	}
	 	for (i = 0; i < arr.length - 1; i++) {
      		var current = 1,
      			j;

      for (j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          current++;
        }
      }

      if (current > max) {
        max = current;
        mostCommonNumber = arr[i];
      }
    }
    console.log(arr);
    console.log("The most frequent number in Array: " + mostCommonNumber);
    console.log("Count: " + max);
    
}