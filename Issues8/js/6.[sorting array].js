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
arr.sortMyArray = function () {
	if (this.length==1) {
		window.stop();
	} else {
		for (var i = 0; i < this.length; i++) 
		{
			var min=i;
			for(var j = i+1; j < this.length; j++)
			{
	      		if(this[j] < this[min])
	      		{
	       			min = j;
	      		}
	    	}	
	    	var temp = this[i];
	    	this[i] = this[min];
	    	this[min] = temp;
	  }
	  alert(this);		
	}

};
var z= arr.sortMyArray();