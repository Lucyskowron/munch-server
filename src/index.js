const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Query {
    pandas: [Panda]!
  }

  type Panda {
    id: ID!
    name: String!
    "this is usually bamboo"
    favouriteFood: String!
    favouriteNonBambooFood: String!
    favouriteShows: [TvShow]!
  }

  type TvShow {
    title: String!
    numberOfEpisodes: Int!
  }

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

const pandas = [
  {
    id: '1',
    name: 'Flumpy',
    favouriteFood: 'bamboo',
    favouriteNonBambooFood: 'apples',
    favouriteShows: ['3'],
  },
  {
    id: '2',
    name: 'Angelica',
    favouriteFood: 'bamboo',
    favouriteNonBambooFood: 'chocolate drops',
    favouriteShows: ['2'],
  },
  {
    id: '3',
    name: 'Chocky',
    favouriteFood: 'bamboo',
    favouriteNonBambooFood: 'dumplings',
    favouriteShows: ['1', '2'],
  },
  {
    id: '4',
    name: 'Bertrum',
    favouriteFood: 'bamboo',
    favouriteNonBambooFood: 'A Spanish omelette',
    favouriteShows: ['1'],
  },
];

const tvShows = [
  {
    id: '1',
    title: 'Star Wars',
    numberOfEpisodes: 10,
  },
  {
    id: '2',
    title: 'Buffy the Vampire Slayer',
    numberOfEpisodes: 101,
  },
  {
    id: '3',
    title: 'Portrait Artist of the Year',
    numberOfEpisodes: 35,
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    pandas: (_, args) => {
      return pandas;
    },
  },
  Panda: {
    favouriteShows: (parent) => {
      return tvShows.filter((tvShow) =>
        parent.favouriteShows.includes(tvShow.id),
      );
    },
  },
  Mutation: {
    addPanda: (_, { input }) => {
      const panda = {
        id: input.id,
        name: input.name,
        favouriteFood: input.favouriteFood,
        favouriteNonBambooFood: input.favouriteNonBambooFood,
        favouriteShows: input.favouriteShows || [],
      };
      pandas.push(panda);
      return panda;
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
