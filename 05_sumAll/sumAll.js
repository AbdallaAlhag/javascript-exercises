const sumAll = function(first, last) {
    let sum = 0;
    if(first > last){
        let temp = last;
        last = first;
        first = temp;
    }
    // isNaN function didn't work with "90" had to switch to !Number.isInteger()
    else if(!Number.isInteger(first) || !Number.isInteger(last) || (first < 0 || last < 0) )
        return "ERROR";
    
    for(let i = first; i <= last; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
