function maxSequence(input) {
	var maxcount=0,
		count=0,
		maxnumbers=0;
	for (var i = 0; i < input.length; i++) {
		if (input[i] == input[i + 1])
            {
                count++;
 
                if (count > maxcount)
                {
                    maxcount = count;
                    maxnumbers = input[i];
                }
            }
            else
            {
                count = 1;
            }
	}
	console.log("N = " + maxnumbers);
	console.log("count = " + maxcount);
}