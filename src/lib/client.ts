import { GraphQLClient } from "graphql-request";
import { getSdk } from "src/graphql/types";

const API_ENDPOINT =
  process.env.NEXT_PUBLIC_API_ENDPOINT || "http://localhost:4242/api/graphql";

export const client = getSdk(new GraphQLClient(API_ENDPOINT));
