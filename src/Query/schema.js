const { gql } = require('apollo-server');

const typeDef = gql`
  type Query {
    pandas: [Panda]!
    pandaFriends: [PandaFriend]!
  }
`;

module.exports = typeDef;
