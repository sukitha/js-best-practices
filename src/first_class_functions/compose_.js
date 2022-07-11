const { flowRight } = require("lodash");


const multiplier = (x) => (y) => x * y;
const adder = (x) => (y) => x + y;

const multiplyBy3 = multiplier(3);
const multiplyBy4 = multiplier(4);
const add5 = adder(5);


const result = multiplyBy4(multiplyBy3(add5(1)));

const composeCalculations = flowRight(multiplyBy4, multiplyBy3, add5 )
console.log(composeCalculations(1));