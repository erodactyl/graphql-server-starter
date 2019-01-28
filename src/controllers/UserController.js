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
}

module.exports = UserController;
