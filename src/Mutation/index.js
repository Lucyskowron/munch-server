const typeDef = require('./schema');
const data = require('../db');

const resolver = {
  Mutation: {
    addPanda: (_, { input }) => {
      const panda = {
        id: input.id,
        name: input.name,
        favouriteFood: input.favouriteFood,
        favouriteNonBambooFood: input.favouriteNonBambooFood,
        favouriteShows: input.favouriteShows || [],
      };
      data.pandas.push(panda);
      return panda;
    },
  },
};

module.exports = { resolver, typeDef };
