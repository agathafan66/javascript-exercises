const repeatString = function(word, times) {
    if (times < 0) return "ERROR";
    let str="";
    for (i=0; i<times; i++) {
        str += word;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
