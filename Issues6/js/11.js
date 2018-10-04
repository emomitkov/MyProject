function isPrime() {
  var num=parseInt(document.getElementById("prime").value);
  console.log(num);
  var prime = num != 1;
  if (num !== 1 && num !== 0 && num) 
  {
  	for(var i = 2; i < num; i++){
		if(num % i === 0){
				prime = false;
            break;
		}		
  	}
    	
	} else {
		alert("Nevalidni danni!");
	}
	document.getElementById("demo").innerHTML="Is it prime: " + prime;
}