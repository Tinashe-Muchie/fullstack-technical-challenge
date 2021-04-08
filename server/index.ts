import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schema/schema';


const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen( { port: 5500 }, () => {
    console.log(`Server ready at http://localhost:5500${server.graphqlPath}`);
});
    