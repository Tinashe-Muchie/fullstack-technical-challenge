import React, { useContext } from 'react';
import { Context } from '../../Context/GlobalContext';
import { StyledListGroup, StyledListGroupItem,   
        StyledInput, PrimaryButton, OutlinePrimaryButton,
        StyledLink, Wrapper, StyledDiv } from '../Styling/Homepage';


export const Homepage: React.FC = () => {

    const { loading, data, page,
        selectedPerson, setActivePerson, setPage } = useContext( Context ); 


    if( loading ) return <p>Loading...</p>;
    
    return ( 
        <>  
            <StyledDiv> Home Page </StyledDiv>
            <Wrapper>
                <StyledInput 
                    placeholder = "Search By Page Number (max : 9)"
                    value = { '' }
                    onChange = { (e: { target: { value: any; }; }) => setPage(e.target.value)} 
                />
            </Wrapper>        
            <StyledListGroup>
                {
                    (data) 
                    ? data.getPeople.results.map((result: { name: {} | null | undefined; }, index: string | number) => (
                        <StyledListGroupItem 
                            active={selectedPerson[index]}
                            onClick={ () => setActivePerson(result.name)}
                        >
                            <StyledLink to="/details" > {result.name} </StyledLink>
                        </StyledListGroupItem>
                    ))
                    : <div>undefined</div>
                }
            </StyledListGroup>
            <Wrapper>
                {
                    (page > 1 )
                    ?   <OutlinePrimaryButton
                            onClick = {() => setPage( page - 1 ) }
                            
                        > 
                            Previous Page
                        </OutlinePrimaryButton>
                    :   <OutlinePrimaryButton
                            onClick = {() => setPage( page - 1 ) }
                            disabled
                        > 
                            Previous Page
                        </OutlinePrimaryButton>
                }
                
                {
                    ( page < 9 ) 
                    ?   <PrimaryButton 
                            onClick = {() => setPage( page + 1 ) }
                        > 
                            Next Page
                        </PrimaryButton>
                    :   <PrimaryButton 
                            onClick = {() => setPage( page + 1 ) }
                            disabled
                        > 
                            Next Page
                        </PrimaryButton>
                }    
            </Wrapper>   
        </>
    );
}


