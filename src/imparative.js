module.exports = function sortArray(array) {
  // Return a sorted array.
  let sorted = array.filter((a) => a % 2 === 1).sort((a, b) => a - b);
  let i = 0;
  return array.map((a) => {
    if (a % 2 === 1) {
      let item = sorted[i];
      i++;
      return item;
    } else {
      return a;
    }
  });
}
