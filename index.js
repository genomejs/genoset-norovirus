var gql = require('gql');

module.exports = function(){
  var query = gql.query();
  query.needs(1);
  query.exact('rs601338', 'AA');
  return query;
};