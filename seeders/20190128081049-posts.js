'use strict';
const faker = require('faker');
const { User, Post } = require('../models');
const { arrayFrom, random } = require('../utils');

module.exports = {
  up: async () => {
    const users = await User.findAll({ attributes: ['id'] });
    const posts = arrayFrom(50, () => ({
      title: faker.name.title(),
      text: faker.lorem.paragraph(),
      userId: random(users).id
    }));
    return Post.bulkCreate(posts);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Posts');
  }
};
