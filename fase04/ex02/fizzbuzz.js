
function fizzbuzz(num1, num2){
    var i= num1; 
    var f= num2;
    
    while (i<=f){
        if (i%15===0){
            console.log (i+ " " + "fizzbuzz");
        }
        else if (i%3===0){
            console.log (i+ " " + "fizz");
        }
        else if (i%5===0){
            console.log (i+ " " + "buzz");
        }
        else{
         console.log(i);
        }
        i++
    }
}
