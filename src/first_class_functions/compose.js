function composeV1(...fn) {
  return function (...args) {
    let res = fn[fn.length - 1](...args);
    for (let i = fn.length - 1; i > 0; i--) {
        res = fn[i - 1](res);
    }
    return res;
  };
}

const compose =
  (...fns) =>
  (...args) =>
    fns
      .slice(0, fns.length -1)
      .reduceRight((res, fn) => fn(res), fns[fns.length - 1](...args));

const multiplier = (x) => (y) => x * y;
const adder = (x) => (y) => x + y;

const multiplyBy3 = multiplier(3);
const multiplyBy4 = multiplier(4);
const add5 = adder(5);


const result = multiplyBy4(multiplyBy3(add5(1)));
console.log(result);

const composeOperation = compose(multiplyBy4, multiplyBy3, add5);
const composeResult = composeOperation(1);
console.log(composeResult);
