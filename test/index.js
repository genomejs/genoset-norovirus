var norovirus = require('../');
var should = require('should');
require('mocha');

describe('norovirus', function() {
  it('should match a valid genome', function() {
    norovirus({
      rs601338: {
        genotype: 'AA'
      }
    }).should.eql({
      immune: true
    });
  });
  it('should not match without rs601338', function() {
    norovirus({}).should.eql({
      immune: false
    });
  });
  it('should not match when rs601338 isnt AA', function() {
    norovirus({
      rs601338: {
        genotype: 'TT'
      }
    }).should.eql({
      immune: false
    });
  });
});
