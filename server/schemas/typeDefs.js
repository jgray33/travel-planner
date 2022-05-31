const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    trips: [Trip]
  }
  type Trip {
    _id: ID
    tripName: String
    description: String
    location: String
    startDate: String
    endDate: String
    plans: [Plan]
    facts: [Fact]
  }

  type Plan {
    _id: ID
    category: String
    name: String
    location: [Float]
    notes: [String]
    status: Boolean
  }

  type Fact {
    _id: ID
    description: String
  }

  type Auth {
      token: ID!
      user: User
  }

  type Query {
    users: [User]
    user:(username: String!): User
    trips: [Trip]
    trip(tripId: ID!): Trip
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    addTrip(
      tripName: String
      description: String
      location: String
      startDate: String
      endDate: String
    ): Trip
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
