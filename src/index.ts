import "reflect-metadata";
import { createConnections } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { Questions } from "./resolvers/Questions";

(async () => {
  const app = express();

  await createConnections();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({resolvers: [Questions]}),
    introspection: true,
    playground: true,
    context: ({ req, res }) => ({ req, res })
  });

  apolloServer.applyMiddleware({ app, cors: false });
  const port = process.env.PORT || 3306;
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`);
    console.log(`Server ready at https://graphqlfd.herokuapp.com/`);
  });
})();