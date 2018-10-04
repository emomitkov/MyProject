function array() {
	var values = [-3.40,-4.67,0,34.5,9.8];
	var min = values[0];
	var max =values[0];
	var sum = 0.0;
	var avg=0.0;
	for (var i = 0; i < values.length; i++) {
		sum+=values[i];
		console.log(sum);
		if(min>values[i]){
			min=values[i];
		}
		if (max<values[i]) {
			max=values[i];
		}
	}

	avg=sum/5;
	document.getElementById("demo").innerHTML="min= " + min + "<br>" + " max= " + max + "<br>" + "sum= " + sum.toFixed(2) + "<br>" + "avg= " + avg.toFixed(2);
}