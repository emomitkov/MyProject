console.log("correctBrackets(bracketsInIt)");
function correctBrackets(str) {
    var r = /^\((.+)?\)$/g;
    if(r.test(str))
    	{
    		return "Correct";
    	}
    else
    {
    		return "Incorrect";
    }
}