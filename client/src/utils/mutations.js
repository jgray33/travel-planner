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
mutation Mutation($tripName: String, $description: String, $location: String, $startDate: String, $endDate: String) {
    addTrip(tripName: $tripName, description: $description, location: $location, startDate: $startDate, endDate: $endDate) {
      tripName
      description
    }
  }`