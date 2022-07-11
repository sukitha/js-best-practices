const doubleEach = require('../src/imparative_programming/declarative');
const expect = require('chai').expect;

describe('Declarative programming test', () => {
    it('It shoud return [2 ,4, 6, 8] if input given is [1, 2, 3, 4]', () => {
        expect(doubleEach(1, 2, 3, 4)).to.be.deep.equals([2 ,4, 6, 8]);
    })

    it('It shoud return [0, -2, 2] if input given is [0, -1, 1]', () => {
        expect(doubleEach(0, -1, 1)).to.be.deep.equals([0, -2, 2]);
    })
});