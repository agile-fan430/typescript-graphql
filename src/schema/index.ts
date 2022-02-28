import { makeExecutableSchema } from "graphql-tools";
import { bets, users } from "./resolvers";
import { types, queries, mutations } from "./types";

export const schema = makeExecutableSchema({
  typeDefs: [types, queries, mutations],
  resolvers: [users, bets],
});
