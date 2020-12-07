const { ApolloServer } = require('apollo-server');
const Query = require('./Query');
const Panda = require('./Panda');
const Mutation = require('./Mutation');
const PandaFriend = require('./PandaFriend');
const TvShow = require('./TvShow');
const Food = require('./Food');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: [
    Query.typeDef,
    Panda.typeDef,
    Mutation.typeDef,
    PandaFriend.typeDef,
    TvShow.typeDef,
    Food.typeDef,
  ],
  resolvers: {
    ...Query.resolver,
    ...Panda.resolver,
    ...Mutation.resolver,
    ...PandaFriend.resolver,
    ...Food.resolver,
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
