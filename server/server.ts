import { ApolloServer } from 'apollo-server-express';
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
import { typeDefs, resolvers } from './schema/schema';

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