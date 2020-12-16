const { gql } = require('apollo-server');

const typeDef = gql`
  type Query {
    pandas: [Panda]!
    pandaFriends: [PandaFriend]!
    blogPosts: [BlogPost]!
  }
`;

module.exports = typeDef;
