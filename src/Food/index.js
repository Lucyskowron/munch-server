const typeDef = require('./schema');
const data = require('../db');

const resolver = {
  Food: {
    typeOfFood: (parent) => {
      // return data.food.filter((food) => parent.includes(food.id));
      const eatenFood = data.food.find((food) => food.id === parent);
      return eatenFood.typeOfFood;
    },
  },
};

module.exports = { resolver, typeDef };
