import gql from "graphql-tag";

export const queries = gql`
  type Query {
    getUser(id: Int!): User
    getUserList: [User]!
    getBet(id: Int!): Bet
    getBetList: [Bet]!
  }
`;
