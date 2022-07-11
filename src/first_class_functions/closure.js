
const adder = x => y => x + y; //  this is higher order -> return a function 


const add3 = adder(3);
const add2 = adder(2);

console.log(add3(2));
console.log(add2(2));

const requestCreator = (options) => (url) => Object.assign({}, options, {url: url});

const applicationJsonCreator = requestCreator({ header: {applicationType: 'application/json'}});

const request1 = applicationJsonCreator('https://gapstars.net');
console.log(request1);


const request2 = applicationJsonCreator('https://google.com');
console.log(request2);
