'use strict'

var expect = require('chai').expect;
var numFormatter = require('../index');

describe('#numFormatter', () => {
    it('show format 2 digits', () => {
        var result = numFormatter(10);
        expect(result).to.equal('10');
    });
    it('show format 4 digits', () => {
        var result = numFormatter(1000);
        expect(result).to.equal('1,000');
    });
    it('show format 6 digits', () => {
        var result = numFormatter(100000);
        expect(result).to.equal('100,000');
    });
    it('show format 10 digits', () => {
        var result = numFormatter(1000000000);
        expect(result).to.equal('1,000,000,000');
    });
});