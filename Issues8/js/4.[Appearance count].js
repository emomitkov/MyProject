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
arr.appearenceCount = function() {
		 	for (i = 0; i < this.length - 1; i++) {
      		var current = 1,
      			j;

      for (j = i + 1; j < this.length; j++) {
        if (this[i] == this[j]) {
          current++;
        }
      }

      if (current > max) {
        max = current;
        mostCommonNumber = this[i];
      }
    }
    if (max==1) {
    	window.stop();
    }
    else{
    alert(max);
    }
};
var z = arr.appearenceCount();