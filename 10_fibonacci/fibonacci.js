const fibonacci = function(num) {
    if(num < 0)
        return "OOPS";

    //return fib(num) + fib(num - 1);

    let fib = [0,1];
    for(let i = 0; i <= num - 2; i++){
        fib.push(fib[i] + fib[i+1]);
    }
    return fib[num];
};

// const recursiveFactorial = function (n) {
//     if (n === 0) {
//       return 1;
//     }
//     return n * recursiveFactorial(n - 1);
//   };
// Do not edit below this line
module.exports = fibonacci;
