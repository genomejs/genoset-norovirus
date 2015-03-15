var gql = require('gql');
var test = gql.exact('rs601338', 'AA');

module.exports = function(data) {
  return {
    immune: test(data);
  };
};