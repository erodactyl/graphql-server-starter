'use strict';
const faker = require('faker');
const { User } = require('../models');
const { arrayFrom } = require('../utils');

module.exports = {
  up: () => {
    const users = arrayFrom(10, () => ({
      name: faker.name.firstName()
    }));
    return User.bulkCreate(users);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Users');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
