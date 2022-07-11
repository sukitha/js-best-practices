let shopingItems = [
  { name: "item1", price: 100 },
  { name: "item2", price: 50 },
  { name: "item3", price: 150 },
];

console.log(shopingItems.map(item => item['price']));

const multiply = (x) => (y) => x * y;
const discount = multiply(0.9);
const tax = multiply(1.05);
const pluck = (key) => (item) => item[key];
const pluckPrice = pluck('price');
const sum = (x, y) => x + y;

const val = { name: "item1", price: 100 };
console.log(pluckPrice(val));
console.log(discount(pluckPrice(val)));
console.log(tax(discount(pluckPrice(val))));

const shoppingItemCost = shopingItems.map(pluckPrice).map(discount).map(tax).reduce(sum, 0);
console.log(shoppingItemCost);


const compose =
  (...fns) =>
  (...args) =>
    fns
      .slice(0, fns.length -1)
      .reduceRight((res, fn) => fn(res), fns[fns.length - 1](...args));

const calculateTheItemPrice = compose(tax, discount, pluckPrice);
const shoppingItemSums = shopingItems.map(calculateTheItemPrice);
console.log(shoppingItemSums.reduce(sum, 0));
