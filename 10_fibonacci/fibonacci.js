const fibonacci = function(num) {
    // Recursive function that works with this
    const n  = parseInt(num); 
    if(n < 0)
        return "OOPS";
    if(n <= 1)
        return n;
    else
        return fibonacci(n -1 ) + fibonacci(n - 2);
    // MY ORIGINAL ANSWER, KINDA LIKE IT BETTER THAN THE SOLUTION
    // let fib = [0,1];
    // for(let i = 0; i <= num - 2; i++){
    //     fib.push(fib[i] + fib[i+1]);
    // }
    // return fib[num];
};


module.exports = fibonacci;
