const getUpper = require('./../src/pure_function/pure');
const expect = require('chai').expect;

describe("Upper function", () => {
    it("Should return JOHN if given that name is john", () => {
        expect(getUpper('john')).to.be.equals('JOHN');
    })
})