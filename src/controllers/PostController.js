const { DataSource } = require('apollo-datasource');

class PostController extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  getPostById(id) {
    return this.store.Post.findOne({ where: { id } });
  }

  getPostsByUser(userId) {
    return this.store.Post.findAll({ where: { userId } });
  }

  createPost({ title, text, userId }) {
    return this.store.Post.create({ title, text, userId });
  }
}

module.exports = PostController;
