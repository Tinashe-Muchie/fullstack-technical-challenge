import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { Homepage } from './components/Homepage/Homepage';
import { Details } from './components/Homepage/Details';
import GlobalContext from './Context/GlobalContext';
import { StyledNav, StyledUl, StyledLi, Wrapper, StyledLink } from './components/Styling/Nav';
import { Helmet } from 'react-helmet';

const link = from ([ 
  new HttpLink({ uri : "https://sovtech-technical-server.netlify.app" })
]);

const client = new ApolloClient ({
  cache: new InMemoryCache(),
  link: link,
});

const App : React.FC = () => {
  return (

    <ApolloProvider client={client} > 
      <GlobalContext >
  
        <Helmet>
          <style>{'body {background-color: #2F4454}'}</style>
        </Helmet>
        <Wrapper>
          <Router>

            <StyledNav>
              <StyledUl>
                <StyledLi>
                  <StyledLink to="/"> Star Wars People </StyledLink>
                </StyledLi>
              </StyledUl>
            </StyledNav>

          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/details">
              <Details />
            </Route>
          </Switch>

          </Router>
        </Wrapper>  
      </GlobalContext >
    </ApolloProvider > 
  );   
}

export default App;

