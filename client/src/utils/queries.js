import { gql } from "@apollo/client";

export const QUERY_USER = gql`
query User($username: String!) {
  user(username: $username) {
    _id
    username
    trips {
      tripName
      description
      location
      startDate
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
