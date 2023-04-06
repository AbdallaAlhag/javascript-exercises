const removeFromArray = function(arr, ...manyMoreArgs) {
    for (let j = 0; j < manyMoreArgs.length; j++) {
        for(let i = 0; i < arr.length; i++)
        {
            if (arr[i] === manyMoreArgs[j])
                arr.splice(i,1);

        }
    }
    return arr;    
};

// Do not edit below this line
module.exports = removeFromArray;
