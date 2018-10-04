function theBiggestOfFive() {
	var a=parseInt(document.getElementById("num1").value);
	var b=parseInt(document.getElementById("num2").value);
	var c=parseInt(document.getElementById("num3").value);
	var d=parseInt(document.getElementById("num4").value);
	var e=parseInt(document.getElementById("num5").value);
	if (a>b && a>c && a>d && a>e)
	{
	    document.getElementById("demo").innerHTML = a;
	}
	else if (b>a && b>c && b>d && b>e)
	{
	    document.getElementById("demo").innerHTML = b;
	}
	else if (c>a && c>b && c>d && c>e)
	{
	    document.getElementById("demo").innerHTML = c;
	}
	else if (d>a && d>c && d>b && d>e)
	{
	    document.getElementById("demo").innerHTML = d;
	}
	else
	{
	    document.getElementById("demo").innerHTML = e;
	}
}