// Problem is to find the sum of all natural numbers below 1000 that are multiples of 3 or 5

function getNumbers(num)    {
    var allDigits = [];
    var numSum = 0;
    
    // Finds all the numbers below num that are multiples of 3 or 5 and stores them in allDigits
    function findNumbers(num)   {
        if(num === 0)   {
            // Once it finds all the numbers it adds them
            return (addNumbers());
        }   else if((num % 3 === 0) || (num % 5 === 0)) {
            allDigits.push(num);
            return (findNumbers(num-1));
        }   else    {
            return (findNumbers(num-1));
        }
    } // End findNumbers definition
    
    // Adds all digits from collection
    function addNumbers()   {
        for(var i = 0;i < allDigits.length; i++)    {
            numSum += allDigits[i];
        }
    } // End addNumbers definition
    
    // Calls the inner function to find the numbers
    findNumbers(num-1);
    
    // Prints the sum of the collection of numbers
    return("The sum of all natural numbers below " + num + " that are multiples of 3 or 5 is " + numSum);
}

getNumbers(1000);