const typeDef = require('./schema');
const data = require('../db');

const resolver = {
  PandaFriend: {
    friendOfWhom: (parent) => {
      return parent.friendOfWhom.map((id) => {
        const foundPanda = data.pandas.find((panda) => panda.id === id);
        return foundPanda;
      });
    },
  },
};

module.exports = { resolver, typeDef };
