const { gql } = require('apollo-server');

const typeDef = gql`
  type PandaFriend {
    name: String!
    breed: String!
    friendOfWhom: [Panda]!
    foodConsumed: [Food]!
  }
`;

module.exports = typeDef;
