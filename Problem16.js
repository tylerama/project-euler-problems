// Problem is to get the sum of the digits of 2 to the power of 1000

function sum(num1, num2)    {
    var allDigits = [];
    var numSum = 0;
    var prod = Math.pow(num1, num2);
    
    // Finds the value of num1 to the power of num2 and collects the digits in allDigits
    function getNumbers(n) {
        if(n < 10)  {
            allDigits.push(n);
            // When it's down to the last number it calls the add function
            return (addNumbers());
        }   else    {
            allDigits.push(n % 10);
            getNumbers(Math.floor(n / 10));
        }
    } // End getNumbers definition
    
    // Adds the digits in allDigits
    function addNumbers()   {
        for(var i = 0; i < allDigits.length; i++)   {
            numSum += allDigits[i];
        }
    } // End addNumbers definition
    
    // Calls the inner function to get the numbers
    getNumbers(prod);
    
    // Prints out the sum of the digits in the number
    return("The sum of the digits of " + num1 + " to the power of " + num2 + " is " + numSum);
}

sum(2,1000);