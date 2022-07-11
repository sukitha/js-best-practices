let actions = Object.freeze(['reading', 'writing', 'debuging']);

const slicedActions = actions.slice(0, 2);
console.log(slicedActions);
console.log(actions);


const splicedActions = actions.splice(0, 2);
console.log(splicedActions);
console.log(actions);


