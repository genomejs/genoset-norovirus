var norovirus = require('../');
var es = require('event-stream');
var should = require('should');
var fs = require('fs');

var path = require('path');
require('mocha');

var isMale = require('./fixtures/is-male.json');
var isFemale = require('./fixtures/is-female.json');

describe('norovirus', function() {

    it('should match a male genome', function(done) {
      var query = norovirus();
      var stream = query.stream();
      es.readArray(isMale).pipe(stream);
      stream.on('end', function(){
        query.matches().length.should.equal(1);
        query.percentage().should.equal(100);
        done();
      });
    });

});
