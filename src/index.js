const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const store = require('../models');
const { UserController, PostController } = require('./controllers');

const dataSources = () => ({
  user: new UserController({ store }),
  post: new PostController({ store })
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

module.exports = server;
