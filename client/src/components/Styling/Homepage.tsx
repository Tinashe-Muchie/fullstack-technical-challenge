import styled from 'styled-components';
import {ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #C5C6C7;
    font-weight: bold;
`;

export const StyledListGroup = styled(ListGroup)`
    background: #2F4454;
    padding: 0.01em;
`;

export const StyledListGroupItem = styled(ListGroup.Item) `
    background: #2E151B;
    color: #C5C6C7;
    padding-top: 0.75em;
    padding-bottom: 0.75em;
    border-bottom: thin solid #DA7B93;
    border-radius: 0.15em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    
`;

export const StyledInput = styled.input.attrs(props => ({
    type: "text",
    size: "0.5em",
  }))`
    background: #2E151B; 
    width: 30vw;
    color: #C5C6C7;
    font-size: 1em;
    border: 0.1em solid #DA7B93;
    border-radius: 0.15em;
    margin-bottom: ${ props => props.size };
    padding: ${ props => props.size };
`;

export const PrimaryButton = styled.button`
    background: #2E151B;
    color: #C5C6C7;
    font-size: 1em;
    margin-top: 1em;
    padding: 0.5em 1em;
    border: 0.1em solid #DA7B93;
    border-radius: 0.15em;
`;

export const OutlinePrimaryButton = styled.button`
    background: #2F4454;
    color: #C5C6C7;
    font-size: 1em;
    margin-top: 1em;
    padding: 0.5em 1em;
    border: 0.1em solid #DA7B93;
    border-radius: 0.15em;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5em;
    color: #C5C6C7;
    font-size: larger;
    font-weight: bolder;
`;

export const StyledSpan = styled.span`
    font-weight: bolder;
    color: #376E6F;
    margin-left: 0.5em;
`;