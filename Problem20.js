// Problem is to get the sum of the product of 100

function numProd(n) {

    function product(n) {
        if(n===0) return(1);
        
        return (n * product(n-1));
    }
    
    function sum(num)  {
        var allDigits = [];
        var totalNum = 0;
    
        function breakUpNumber(n)   {
            if (n < 10) {
                allDigits.push(n);
            }   else    {
                allDigits.push(n % 10);
                breakUpNumber( Math.floor(n / 10));
            }
    
        } // End breakUpNumber definition
        
        function addNumber()    {
            for(var i=0;i<allDigits.length;i++) {
                totalNum += allDigits[i];
            }   
            return(console.log(totalNum));
        } // End addNumber definition
    
        // call the inner method to break up the number
        breakUpNumber(num);
    
        // call the inner method to add the numbers in array
        addNumber();
    } // End sum definition
    
    //call inner method to get sum of product
    sum(product(n));
    
}

numProd(100);