const { gql } = require('apollo-server');

const typeDef = gql`
  type Food {
    typeOfFood: String!
  }
`;

module.exports = typeDef;
