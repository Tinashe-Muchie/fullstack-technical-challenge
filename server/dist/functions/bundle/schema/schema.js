"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const apollo_server_lambda_1 = require("apollo-server-lambda");
const baseURL = `https://swapi.dev/api`;
const node_fetch_1 = __importDefault(require("node-fetch"));
exports.typeDefs = apollo_server_lambda_1.gql `
    
    type Query {
        getPeople ( page : Int! ): People
        getSpecificPerson ( name : String! ) : SpecificPerson
    }

    type Planet {
        name : String!
        rotation_period : String! 
        orbital_period : String!
        diameter : String!
        population : String!
    }

    type Person {
        name : String!
	    height : String!
	    mass : String!
	    gender : String!
	    homeworld : Planet!    
    }

    type SpecificPerson {
        results : [Person!]!
    }
    
    type People {
        count : Int!
        next: String
        previous: String 
        results : [ Person! ]!
    }

`;
exports.resolvers = {
    Person: {
        homeworld: async (parent, args) => {
            const res = await node_fetch_1.default(parent.homeworld);
            return res.json();
        }
    },
    Query: {
        getPeople: async (parent, { page }) => {
            const res = await node_fetch_1.default(`${baseURL}/people/?page=${page}`);
            return res.json();
        },
        getSpecificPerson: async (parent, { name }) => {
            const res = await node_fetch_1.default(`${baseURL}/people/?search=${name}`);
            return res.json();
        }
    }
};
