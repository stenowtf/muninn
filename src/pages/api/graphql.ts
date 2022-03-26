import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import type { PageConfig } from "next";
import { resolvers } from "src/pages/api/resolvers";
import { typeDefs } from "src/pages/api/schemas";

export const config: PageConfig = { api: { bodyParser: false } };

const cors = Cors();
const server = new ApolloServer({ typeDefs, resolvers });
const startServer = server.start();

export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
});
