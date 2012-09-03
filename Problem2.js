// Problem is to get the sum of the even valued terms who do not exceed 4,000,000 in the Fibonacci sequence
function fibo(max)  {

    var sequence = [1,2];
    var max = max;
    
    // Does the Fibonacci sequence adding the terms to sequence
    function addNums()  {
        var num1 = sequence[sequence.length-1];
        var num2 = sequence[sequence.length-2];
        if(num1+num2 <= max)  {
            sequence.push(num1+num2);
            return (addNums());
        }   else    {
            // Calls next function
            getEven();
        }
    } // End addNums definition
    
    // Adds the even terms in the sequence
    function getEven()  {
        var evenTerms = [];
        var sum = 0;
        for(var i = 0; i < sequence.length; i++)    {
            if((sequence[i]) % 2 === 0) {
                evenTerms.push(sequence[i]);
            }
        }
        for(var i = 0; i < evenTerms.length; i++)   {
            sum += evenTerms[i];
        }
        console.log("The sum of the even valued terms who do not exceed " + max + " is " + sum);
    } // End getEven definition
    
    // Call to inner function to add the numbers to the sequence
    addNums();
}

fibo(4000000);