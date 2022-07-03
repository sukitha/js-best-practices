"use strict";

const a = 1.0;
const b = "1";
const c = 1;

console.log(typeof a);

b.prop = function () {
  console.log(`I am A`);
};

console.log(b == c);
console.log(a == c);
console.log(b == a);

a.print();
