const typeDef = require('./schema');
const data = require('../db');

const resolver = {
  Query: {
    pandas: (_, args) => {
      return data.pandas;
    },
    pandaFriends: (_, args) => {
      return data.pandaFriends;
    },
  },
};

module.exports = { resolver, typeDef };
