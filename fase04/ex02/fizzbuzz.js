function fizzbuzz(num1, num2){
    var i= num1; 
    var f= num2;
    
    while (i<=f){
        if (i%15===0){
            console.log (i+ " " + "FizzBuzz");
        }
        else if (i%3===0){
            console.log (i+ " " + "Fizz");
        }
        else if (i%5===0){
            console.log (i+ " " + "Buzz");
        }
        else{
         console.log(i);
        }
        i++
    }
}
