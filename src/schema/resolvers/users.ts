import { IResolvers } from "graphql-tools";
import { User } from "../../database/entities/index";
import { MutationResolvers, QueryResolvers } from "../graphql/generated";

const queries: Pick<QueryResolvers, "getUser" | "getUserList"> = {
  getUser: async (_, { id }) => (await User.findOne(id)) ?? null,
	getUserList: async () => (await User.find()) ?? [],
};

const mutations: Pick<MutationResolvers, "createUser"> = {
  createUser: async (_, { name, balance }) => {
    const user = User.create({
      name: name,
      balance: balance,
    });

    await user.save();
    return user;
  },
};

export const users: IResolvers = {
  Query: {
    ...queries,
  },
  Mutation: {
    ...mutations,
  },
};
