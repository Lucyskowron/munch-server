const typeDef = require('./schema');
const data = require('../db');

const resolver = {
  Panda: {
    favouriteShows: (parent) => {
      return data.tvShows.filter((tvShow) =>
        parent.favouriteShows.includes(tvShow.id),
      );
    },
    blogPosts: (parent) => {
      const theBlogs = data.blogPosts.filter((post) =>
        parent.blogPosts.includes(post.id),
      );
      return theBlogs;
    },
  },
};

module.exports = { resolver, typeDef };
