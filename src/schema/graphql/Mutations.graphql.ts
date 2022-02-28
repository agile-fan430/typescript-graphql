import gql from "graphql-tag";

export const createUser = gql`
  mutation CreateUser($name: String!, $balance: Float!) {
    createUser(name: $name, balance: $balance) {
      name
      balance
    }
  }
`;

export const createBet = gql`
  mutation CreateBet($userId: Int!, $betAmount: Float!, chance: Float!) {
    createBet(userId: $userId, betAmount: $betAmount, chance: $chance) {
      userId
      betAmount
	  chance
    }
  }
`;