"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const { gql } = require('apollo-server-express');
const baseURL = `https://swapi.dev/api`;
const fetch = require('node-fetch');
exports.typeDefs = gql `
    
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
            const res = await fetch(parent.homeworld);
            return res.json();
        }
    },
    Query: {
        getPeople: async (parent, { page }) => {
            const res = await fetch(`${baseURL}/people/?page=${page}`);
            return res.json();
        },
        getSpecificPerson: async (parent, { name }) => {
            const res = await fetch(`${baseURL}/people/?search=${name}`);
            return res.json();
        }
    }
};
