const typeDef = require('./schema');
const data = require('../db');

const resolver = {
  Panda: {
    favouriteShows: (parent) => {
      return data.tvShows.filter((tvShow) =>
        parent.favouriteShows.includes(tvShow.id),
      );
    },
  },
};

module.exports = { resolver, typeDef };
