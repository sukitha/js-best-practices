const sum = require('../src/sum');
const expect = require('chai').expect;

describe("Array", () => {
  describe("#index", () => {
    it("should return -1 if number is not present", () =>
    expect(sum(1, 2)).to.equal(3));
  });
});
