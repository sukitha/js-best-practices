const {List} = require('immutable');

const listOfActions = List(['reading', 'writing', 'debuging']);


const imutableSlice =  listOfActions.slice(0,2);
console.log(imutableSlice.toArray());
console.log(listOfActions.toArray());


const imutableSplice =  listOfActions.splice(0,2);
console.log(imutableSplice.toArray());
console.log(listOfActions.toArray());