import gql from "graphql-tag";

export const getUser = gql`
  query GetUser($id: Int!) {
    getUser(id: $id) {
      id
      name
      balance
    }
  }
`;

export const getUsers = gql`
  query GetUsers {
    getUserList {
      id
      name
      balance
    }
  }
`;
export const getBet = gql`
  query GetBet($id: Int!) {
    getBet(id: $id) {
      id
      userId
	  betAmount
	  chance
	  payout
      win
    }
  }
`;

export const getBets = gql`
  query GetBets {
    getBetList {
      id
      userId
	  betAmount
	  chance
	  payout
      win
    }
  }
`;
