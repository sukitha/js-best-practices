const partial = (fn, ...args) => (...otherArgs) => fn(...args, ...otherArgs);

const requestCreator = (options, url) => Object.assign({}, options, {url: url});

const applicationJsonCreator = partial( requestCreator, { header: {applicationType: 'application/json'}});

const request1 = applicationJsonCreator('https://gapstars.net');
console.log(request1);


const request2 = applicationJsonCreator('https://google.com');
console.log(request2);

//////////////////// added added with partial //////////////////////////
const adder = (x, y) => x + y;

const add3 = partial(adder, 3);

console.log(add3(5));