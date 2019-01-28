module.exports = {
  Query: {
    user(_, { id }, { dataSources }) {
      return dataSources.user.getUserById(id);
    },
    post(_, { id }, { dataSources }) {
      return dataSources.post.getPostById(id);
    }
  },
  User: {
    posts(user, _, { dataSources }) {
      return dataSources.post.getPostsByUser(user.id);
    }
  },
  Post: {
    user(post, _, { dataSources }) {
      return dataSources.user.getUserById(post.userId);
    }
  }
};
