const doubleEach = require('../src/imparative_programming/imparadive');
const expect = require('chai').expect;

describe('Imparative programming test', () => {
    it('It shoud return [2 ,4, 6, 8] if input given is [1, 2, 3, 4]', () => {
        expect(doubleEach(1, 2, 3, 4)).to.be.deep.equals([2 ,4, 6, 8]);
    })
});