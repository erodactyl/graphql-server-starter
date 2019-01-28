const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    user(id: ID!): User
    post(id: ID!): Post
  }

  type Post {
    id: ID!
    title: String!
    text: String!
    user: User!
  }

  type User {
    id: ID!
    name: String!
    posts: [Post!]!
  }
`;

module.exports = typeDefs;
