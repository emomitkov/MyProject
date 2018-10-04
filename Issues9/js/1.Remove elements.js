	var x = prompt("Please enter number", "0"),
	 	num = parseInt(x),
	 	arr=[];
	 	for (var i = 0; i < num; i++) {
	 		var y = prompt("Please enter arr[" + i + "]" , "0");
	 		var num2= parseInt(y);
	 		arr[i]=num2;
	 	}
	 	console.log(arr);
arr.removeNum = function () {
	var z = Number(prompt("Please enter number", "0")),
		removeMe = parseInt(z);
		for (var i = 0; i < this.length; i++) {
			if(this[i]==removeMe)
			{
				if(this[i]==this[i+1])
				{
					this.splice(i,2);
				}
				else{
					this.splice(i,1);
				}
				
			}
				console.log(this[i]);
		}

};
var f = arr.removeNum();