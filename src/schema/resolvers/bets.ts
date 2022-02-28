import { IResolvers } from "graphql-tools";
import { Bet } from "../../database/entities/index";
import { MutationResolvers, QueryResolvers } from "../graphql/generated";

const queries: Pick<QueryResolvers, "getBet" | "getBetList"> = {
  getBet: async (_, { id }) => (await Bet.findOne(id)) ?? null,
  getBetList: async () => (await Bet.find()) ?? [],
};

const mutations: Pick<MutationResolvers, "createBet"> = {
  createBet: async (_, { userId, betAmount, chance }) => {
    const bet = Bet.create({
      userId: userId,
      betAmount: betAmount,
      chance: chance,
    });

    await bet.save();
    return bet;
  },
};

export const bets: IResolvers = {
  Query: {
    ...queries,
  },
  Mutation: {
    ...mutations,
  },
};
