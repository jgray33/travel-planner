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
    location: [Float] 
    startDate: String
    endDate: String
    plans: [Plan]
    facts: [Fact]
    }

type Query {
    users: [User]!
    trips: [Trip]
    trip(tripId: ID!): Trip
}

type Mutation {
    addUser(userId: ID!, username:String!, email:String!, password: String!): User
    addTrip(tripId: ID!, tripName: String, description: String, location: [Float], startDate: String, endDate: String): Trip
}
`

module.exports = typeDefs