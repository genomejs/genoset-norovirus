var norovirus = require('../');
var should = require('should');
require('mocha');

describe('norovirus', function() {
  it('should match a valid genome', function() {
    norovirus({
      rs601338: {
        genotype: 'AA'
      }
    }).should.equal(true);
  });
  it('should not match without rs601338', function() {
    norovirus({}).should.equal(false);
  });
  it('should not match when rs601338 isnt AA', function() {
    norovirus({
      rs601338: {
        genotype: 'TT'
      }
    }).should.equal(false);
  });
});
