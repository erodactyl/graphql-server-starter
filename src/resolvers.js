module.exports = {
  Query: {
    user(_, { id }, { dataSources }) {
      return dataSources.user.getUserById(id);
    },
    post(_, { id }, { dataSources }) {
      return dataSources.post.getPostById(id);
    }
  },
  Mutation: {
    addUser(_, { user }, { dataSources }) {
      return dataSources.user.createUser(user);
    },
    addPost(_, { post }, { dataSources }) {
      return dataSources.post.createPost(post);
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
