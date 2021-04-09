import React, { createContext, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

export const Context = createContext< any | {} >({});

const GlobalContext: React.FC = ({ children }) => {

    const [ page, setPage ] = useState< number >(1);
    const [ activePerson, setActivePerson ] = useState< string | null>(null);

    const ALL_PEOPLE = gql`
        {
            getPeople (page: ${page} ) {
                count
                next
                previous
                results {
                    name
                    height
                    mass
                    gender
                    homeworld {
                        name
                        rotation_period
                        orbital_period
                        diameter
                        population
                    }
                }
            }
        }
    `;
    const { loading, data } = useQuery(ALL_PEOPLE);

    let selectedPerson = ( data ) && data.getPeople.results.map(( result: { name: string | null; } ) => {
        return ( result.name === activePerson );
    });
    let selectPerson = ( data ) && data.getPeople.results.find(( result: any, index: string | number ) => {
        return selectedPerson[ index ] === true;
    });

    const value = { 
        loading,
        data,
        selectedPerson,
        setActivePerson,
        selectPerson,
        setPage,
        page,
    }

    return (
        <Context.Provider value={value} >
            {children}
        </Context.Provider>
    );
}

export default GlobalContext;
