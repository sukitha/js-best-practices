const functionSortArray = require("../src/function");
const imparativeSortArray = require("../src/imparative");
const expect = require("chai").expect;

describe("Array", () => {
  describe("Sort Function", () => {
    it("should return [1, 7] if number if input is [7, 1] ", () =>
      expect(functionSortArray([7, 1])).to.deep.equal([1, 7]));
    it("should return [5, 8, 6, 3, 4] if number if input is [3, 8, 6, 5, 4] ", () =>
      expect(functionSortArray([5, 8, 6, 3, 4])).to.deep.equal([
        3, 8, 6, 5, 4,
      ]));
  });

  describe("Sort Imparative", () => {
    it("should return [1, 7] if number if input is [7, 1] ", () =>
      expect(imparativeSortArray([7, 1])).to.deep.equal([1, 7]));
    it("should return [5, 8, 6, 3, 4] if number if input is [3, 8, 6, 5, 4] ", () =>
      expect(imparativeSortArray([5, 8, 6, 3, 4])).to.deep.equal([
        3, 8, 6, 5, 4,
      ]));
  });
});
