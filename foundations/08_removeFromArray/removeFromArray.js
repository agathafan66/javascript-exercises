const removeFromArray = function(array, ...args) {
    return array.filter(function (item){
        return !args.includes(item)
    })
    // return array.filter(val => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
