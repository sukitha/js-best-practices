const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const expect = chai.expect;
chai.use(sinonChai);
const { setName, printUpper } = require("../src/pure_function/impure");

describe("logging", () => {
  beforeEach(function () {
    sinon.spy(console, "log");
  });

  afterEach(function () {
    console.log.restore();
  });

  describe("Impure function test", () => {
    it("Should print JOHN if input name is john", () => {

      setName("john");
      printUpper();
      expect(console.log).to.be.calledOnceWith("JOHN");
    });
  });
});
