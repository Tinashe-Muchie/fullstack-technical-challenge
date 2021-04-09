"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLambdaServer = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_lambda_1 = require("apollo-server-lambda");
const schema_1 = require("./schema/schema");
/*const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen( { port: 5500 }, () => {
    console.log(`Server ready at http://localhost:5500${server.graphqlPath}`);
}); */
function createLambdaServer() {
    return new apollo_server_lambda_1.ApolloServer({
        typeDefs: schema_1.typeDefs,
        resolvers: schema_1.resolvers,
        introspection: true,
        playground: true,
    });
}
exports.createLambdaServer = createLambdaServer;
function createLocalServer() {
    return new apollo_server_express_1.ApolloServer({
        typeDefs: schema_1.typeDefs,
        resolvers: schema_1.resolvers,
        introspection: true,
        playground: true,
    });
}
module.exports = { createLocalServer };
