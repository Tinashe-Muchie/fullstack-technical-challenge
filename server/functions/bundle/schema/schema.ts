import { gql } from 'apollo-server-lambda';
const baseURL = `https://swapi.dev/api`;
import fetch from 'node-fetch';

export const typeDefs: string | string[] | any = gql`
    
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

export const resolvers = {

    Person : {
        homeworld: async ( parent: { homeworld: any; }, args: any ) => {
            const res = await fetch(parent.homeworld);
            return res.json();
        }
    },
    Query : {
        getPeople : async ( parent: any, { page }: any ) => {
            const res = await fetch(`${baseURL}/people/?page=${page}`);
            return res.json();
        },
        getSpecificPerson : async ( parent: any , { name }:  any ) => {
            const res = await fetch(`${baseURL}/people/?search=${name}`);
            return res.json();
        }
    }
}
