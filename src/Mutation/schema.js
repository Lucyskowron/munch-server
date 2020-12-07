const { gql } = require('apollo-server');

const typeDef = gql`
  type Mutation {
    addPanda(input: InputAddPanda!): Panda
  }
  input InputAddPanda {
    id: ID!
    name: String!
    favouriteFood: String!
    favouriteNonBambooFood: String!
  }
`;

module.exports = typeDef;
