const { gql } = require('apollo-server-express')

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

type Query {
    users: [User]!
    trips: [Trip]
    trip(tripId: ID!): Trip
}

type Mutation {
    addUser(username:String!, email:String!, password: String!): User
    addTrip(userId: ID, tripName: String, description: String, location: String, startDate: String, endDate: String): Trip
}
`

module.exports = typeDefs