const palindromes = function (string) {

    // more complicated way 
    // let count = 0;
    // const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    // for (let i = 0; i < string.length; i++) {
    //     if(string[string.length - 1] === punctuationRegex)
    //         string = string.slice(0,-1);
    //     if(string[i] === string[string.length - 1 - i]){
    //         count++;
    //         if(count === string.length -1)
    //             return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

    const newString = string.toLowerCase().replace(/[^a-z]/g, "");
    return newString.split('').reverse().join('') === newString;

};

// Do not edit below this line
module.exports = palindromes;
