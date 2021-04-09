"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./bundle/server");
const server = server_1.createLambdaServer();
exports.handler = server.createHandler({
    cors: {
        origin: '*'
    }
});
