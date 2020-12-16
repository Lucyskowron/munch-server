const { gql } = require('apollo-server');

const typeDef = gql`
  type BlogPost {
    id: Int!
    date: String!
    author: Panda!
    title: String!
    body: String!
  }
`;

module.exports = typeDef;
