const doubleEach = (...args) => {
    let result = [];
    for(let i = 0; i < args.length ; i++){
        let doubledValue = args[i] * 2;
        result[i] = doubledValue;
    }
    return result;
}

module.exports = doubleEach;