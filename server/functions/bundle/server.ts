import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
import { typeDefs, resolvers } from './schema/schema';

/*const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen( { port: 5500 }, () => {
    console.log(`Server ready at http://localhost:5500${server.graphqlPath}`);
}); */
export function createLambdaServer () {
    return new ApolloServerLambda({
      typeDefs,
      resolvers,
      introspection: true,
      playground: true,
    });
  }
  
function createLocalServer () {
    return new ApolloServer({
      typeDefs,
      resolvers,
      introspection: true,
      playground: true,
    });
  } 
  
  module.exports = { createLocalServer }