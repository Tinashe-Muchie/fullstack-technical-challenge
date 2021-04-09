import React, { useContext } from 'react';
import { Context } from '../../Context/GlobalContext'
import { StyledDiv, StyledListGroup,
        StyledListGroupItem, StyledSpan, 
        PrimaryButton, StyledLink } from '../Styling/Homepage';

export const Details: React.FC = () => {

    const { selectPerson } = useContext(Context);

    (selectPerson) && console.log(Object.entries(selectPerson));
    return (
        <>
            <StyledDiv> { Object.values(selectPerson)[1] }'s Details</StyledDiv>
            <StyledListGroup>
                <StyledListGroupItem>
                   Height : <StyledSpan>
                                { Object.values( selectPerson )[2] } cm
                            </StyledSpan>
                </StyledListGroupItem>
                <StyledListGroupItem>
                   Mass : <StyledSpan>
                                { Object.values( selectPerson )[3] } kg
                            </StyledSpan>
                </StyledListGroupItem>
            </StyledListGroup> 
            <StyledLink to="/" >
                <PrimaryButton> Back to Homepage </PrimaryButton>
            </StyledLink>
        </>
    );
}

