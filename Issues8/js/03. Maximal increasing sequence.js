function maxIncreasingSequence(input)
{
		var  cntCurrSeq = 0,
             startCurrSeq = 0,
             cntMaxSeq = 0,
             startMaxSeq = 0;
 
            for (var i = 1; i < input.length; i++)
            {
                if (input[i] - input[i - 1] >= 1)
                {
                    cntCurrSeq++;
                    startCurrSeq = i - cntCurrSeq;
 
                    if (cntCurrSeq > cntMaxSeq)
                    {	
                        cntMaxSeq = cntCurrSeq;
                        startMaxSeq = startCurrSeq;
                        cntMaxSeq++;
                    }
                }
                else
                {
                    cntCurrSeq = 0;
                }
            }

	console.log("Count = " + cntMaxSeq);
}