	var x = prompt("Please enter number", "0"),
	 	num = parseInt(x),
	 	arr=[];
	 	for (var i = 0; i < num; i++) {
	 		var y = prompt("Please enter arr[" + i + "]" , "0");
	 		var num2= parseInt(y);
	 		arr[i]=num2;
	 	}
	 	console.log(arr);
arr.largerThanNeighbour = function () {
	var prev,
		max=0,
		i,
		j;
	for (i = 1; i <=arr.length; i++) 
	{
		prev = i-1;
		for (j = i+1; j <arr.length; j++) 
		{
			if (this[i]>this[prev] && this[i]>this[j])
			{
				max++;
			}
		}		
	}
    if (max==0) {
    	window.stop();
    }
    else{
    alert(max);
    }

};
var d = arr.largerThanNeighbour();