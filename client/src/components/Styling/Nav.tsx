import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledBody = styled.body`
    background: #2F4454;
`;

export const Wrapper = styled.div`
    padding-left: 5em;
    padding-right: 5em;
`;

export const StyledNav = styled.nav`
    margin-top: 1.5%;
    margin-bottom: 1.5%;
`;

export const StyledUl = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const StyledLi = styled.li`
    list-style-type: none;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #C5C6C7;
    font-weight: bold;
    font-size: 1.5em;
`;
