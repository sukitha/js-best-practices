

const moveBy = ([x, y], dx, dy) => Object.freeze([x + dx, y + dy]);

let point = moveBy([1,1], 2, 2);
point = moveBy(point, 1, 1);

console.log(point);
