import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TRIP = gql`
mutation AddTrip($userId: ID, $tripName: String, $description: String, $location: String, $startDate: String, $endDate: String) {
  addTrip(userId: $userId, tripName: $tripName, description: $description, location: $location, startDate: $startDate, endDate: $endDate) {
    tripName
  }
}`

export const ADD_PLAN = gql`
mutation AddPlan($tripId: ID, $category: String, $name: String, $location: String, $notes: String, $status: Boolean) {
  addPlan(tripId: $tripId, category: $category, name: $name, location: $location, notes: $notes, status: $status) {
    category
  }
}
`

export const UPDATE_PLAN = gql`
mutation UpdatePlan($planId: ID, $name: String, $location: String, $notes: String, $status: Boolean) {
  updatePlan(planId: $planId, name: $name, location: $location, notes: $notes, status: $status) {
    name
  }
}`

export const ADD_FACT = gql`
mutation AddFact($tripId: ID, $description: String) {
  addFact(tripId: $tripId, description: $description) {
    _id
  }
}`

export const UPDATE_FACT = gql`
mutation Mutation($factId: ID, $description: String) {
  updateFact(factId: $factId, description: $description) {
    _id
    description
  }
}`

export const DELETE_PLAN = gql`
mutation RemovePlan($planId: ID!, $tripId: ID!) {
  removePlan(planId: $planId, tripId: $tripId) {
    _id
  }
}`

export const DELETE_FACT = gql`
mutation RemoveFact($factId: ID!, $tripId: ID!) {
  removeFact(factId: $factId, tripId: $tripId) {
    tripName
  }
}`

export const UPDATE_TRIP = gql`
mutation Mutation($tripId: ID, $tripName: String, $description: String, $location: String, $startDate: String, $endDate: String) {
  updateTrip(tripId: $tripId, tripName: $tripName, description: $description, location: $location, startDate: $startDate, endDate: $endDate) {
    tripName
  }
}`

export const DELETE_TRIP=gql`
mutation RemoveTrip($tripId: ID!) {
  removeTrip(tripId: $tripId) {
    _id
  }
}
`