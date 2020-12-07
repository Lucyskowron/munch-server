const { gql } = require('apollo-server');

const typeDef = gql`
  type TvShow {
    title: String!
    numberOfEpisodes: Int!
  }
`;

module.exports = typeDef;
