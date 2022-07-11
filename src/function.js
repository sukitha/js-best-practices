module.exports = function sortArray(array) {
  let sorted = array.filter((a) => a % 2 === 1).sort((a, b) => a - b);
  return array.map((a) => (a % 2 === 1 ? sorted.shift() : a));
}


