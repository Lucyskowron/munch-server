const { gql } = require('apollo-server');

const typeDef = gql`
  type Panda {
    id: ID!
    name: String!
    "this is usually bamboo"
    favouriteFood: String!
    favouriteNonBambooFood: String!
    favouriteShows: [TvShow]!
    foodConsumed: [Food]!
    blogPosts: [BlogPost]!
  }
`;

module.exports = typeDef;
