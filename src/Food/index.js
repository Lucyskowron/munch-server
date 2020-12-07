const typeDef = require('./schema');
const data = require('../db');

const resolver = {
  Food: {
    typeOfFood: (parent) => {
      return parent.typeOfFood.map();
    },
  },
};

module.exports = { resolver, typeDef };
