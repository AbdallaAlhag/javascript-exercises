// const removeFromArray = function(arr, ...manyMoreArgs) {
//     for (let j = 0; j < manyMoreArgs.length; j++) {
//         for(let i = 0; i < arr.length; i++)
//         {
//             if (arr[i] === manyMoreArgs[j])
//                 arr.splice(i,1);

//         }
//     }
//     return arr;    
// };

// 2nd method which uses the for each function that runs through each item and checks if our 
// spread syntax, ...args, is in the old array and if it isn't, then we push the element in our new
// array to get rid of any old elements.
// const removeFromArray = function(arr, ...args)
// {
//     const newArray = [];

//     arr.forEach((item) => {
//        if(!args.includes(item))
//         newArray.push(item); 
    
// });

// return newArray;
// };

// 3rd method allows to use the filter function and include to 
const removeFromArray = function(arr, ...args) {
    return arr.filter(value => !args.includes(value));
}

// Do not edit below this line
module.exports = removeFromArray;
