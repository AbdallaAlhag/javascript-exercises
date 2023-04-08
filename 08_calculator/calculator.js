const add = function(foo, bar) {
	return foo + bar;
};

const subtract = function(foo, bar) {
	return foo - bar;
};

const sum = function(arr) {
  // let total = 0;
	// arr.forEach(element => {
  //   total += element;
  // });
  // return total;

  return arr.reduce((total, current) => total + current, 0);

};

const multiply = function(arr) {
  // let total = 1;
	// arr.forEach(element => {
  //   total *= element;
  // });
  // return total;

  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;

};

const power = function(x,y) {
	return Math.pow(x,y);
};

// const factorial = function(num) {
//   if(num === 0)
//     return 1;
//   let sum = num;
// 	for(let i = num; i > 1; i--) {
//     sum *= (i-1);
//   }
//   return sum;
// };

// Using recursion
const factorial = function(num) {
  if(num === 0)
    return 1;
  return num * factorial(num - 1);
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
