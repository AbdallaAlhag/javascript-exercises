const getTheTitles = function(array) {
    // let newArray = [];
    // array.forEach(element => {
    //     newArray.push(element.title);
    // });
    // return newArray;
    return array.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
