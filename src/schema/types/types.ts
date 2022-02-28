import gql from "graphql-tag";

export const types = gql`
  type User {
    id: ID!
    name: String!
    balance: Float!
  },
  type Bet {
    id: ID!
    userId: Int!
    betAmount: Float!
    chance: Float!
    payout: Float!
    win: Boolean!
  }
`;
