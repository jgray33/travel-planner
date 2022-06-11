import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query Query($username: String!) {
    user(username: $username) {
      _id
      username
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
