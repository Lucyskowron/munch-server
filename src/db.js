const pandas = [
  {
    id: '1',
    name: 'Flumpy',
    favouriteFood: 'bamboo',
    favouriteNonBambooFood: 'apples',
    favouriteShows: ['3'],
    foodConsumed: ['1'],
    blogPosts: ['1'],
  },
  {
    id: '2',
    name: 'Angelica',
    favouriteFood: 'bamboo',
    favouriteNonBambooFood: 'chocolate drops',
    favouriteShows: ['2'],
    foodConsumed: ['1', '2'],
    blogPosts: [],
  },
  {
    id: '3',
    name: 'Chocky',
    favouriteFood: 'bamboo',
    favouriteNonBambooFood: 'dumplings',
    favouriteShows: ['1', '2'],
    foodConsumed: ['1', '3'],
    blogPosts: [],
  },
  {
    id: '4',
    name: 'Bertrum',
    favouriteFood: 'bamboo',
    favouriteNonBambooFood: 'A Spanish omelette',
    favouriteShows: ['1'],
    foodConsumed: ['1'],
    blogPosts: ['2'],
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

const pandaFriends = [
  {
    name: 'Humphrey',
    breed: 'Alpaca',
    friendOfWhom: ['1', '2', '3', '4'],
  },
];

const food = [
  {
    id: '1',
    typeOfFood: 'bamboo',
  },
  {
    id: '2',
    typeOfFood: 'chocolate drops',
  },
  {
    id: '3',
    typeOfFood: 'apple',
  },
  {
    id: '4',
    typeOfFood: 'sausages',
  },
  {
    id: '5',
    typeOfFood: 'daisies',
  },
  {
    id: '6',
    typeOfFood: 'leaves',
  },
  {
    id: '7',
    typeOfFood: 'nettles',
  },
];

const blogPosts = [
  {
    id: '1',
    date: '11/12/2020',
    author: '1',
    title: 'My first blog',
    body: 'Hello, Flumpy here. This is my first blog',
  },
  {
    id: '2',
    date: '11/12/2020',
    author: '4',
    title: 'Introduction',
    body: 'Hola! Me llamo Bertrum',
  },
];

module.exports = { pandas, tvShows, pandaFriends, food, blogPosts };
