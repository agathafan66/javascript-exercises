const sumAll = function(a,b) {
    let args=[a,b];
    args.sort( (c,d) => c - d);
    for (item of args) {
        if(item<0 || Number.isNaN(item) || !Number.isInteger(item) ){
            return "ERROR";
        }
    }   
    let sum=0;
    for (let i=args[0]; i<=args[1]; i++) {
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
