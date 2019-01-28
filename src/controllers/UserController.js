const { DataSource } = require('apollo-datasource');

class UserController extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  getUserById(id) {
    return this.store.User.findOne({ where: { id } });
  }

  createUser({ name }) {
    return this.store.User.create({ name });
  }
}

module.exports = UserController;
