import gql from "graphql-tag";

export const mutations = gql`
  type Mutation {

	
    createUser(name: String!, balance: Float!): User!
    createBet(userId: Int!, betAmount: Float!, chance: Float!): Bet!
  }
`;
