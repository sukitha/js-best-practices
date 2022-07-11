let name = 'Jeff';

const getName = () => name;

const setName = (userName) => name = userName;

const printUpper = () => console.log(getName().toUpperCase());


module.exports.printUpper = printUpper;
module.exports.setName = setName;
