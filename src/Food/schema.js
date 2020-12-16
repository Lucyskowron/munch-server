const { gql } = require('apollo-server');

const typeDef = gql`
  type Food {
    id: Int!
    typeOfFood: String!
  }
`;

module.exports = typeDef;
