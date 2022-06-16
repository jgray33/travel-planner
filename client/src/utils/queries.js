import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query User($username: String!) {
    user(username: $username) {
      _id
      username
      trips {
        _id
        tripName
        description
        location
        startDate
        endDate
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      trips {
        _id
        tripName
        description
        startDate
        endDate
        location
      }
    }
  }
`;

export const QUERY_TRIP = gql`
  query Trip($tripId: ID!) {
    trip(tripId: $tripId) {
      tripName
      description
      location
      startDate
      endDate
      plans {
        _id
        category
        name
        location
        notes
        status
      }
      facts {
        _id
        description
      }
    }
  }
`;
