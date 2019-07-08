import ApolloClient from 'apollo-boost';
import React, { Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';

import GlobalStyle from './shared/styles/GlobalStyle';

import Distribution from './Distribution';
import Fundraising from './Fundraising';
import Goal from './Goal';
import Projects from './Projects';

const client = new ApolloClient({
  uri: 'https://server-pydwyazu1.now.sh',
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Fragment>
        <Switch>
          <Route path="/distribution/project/:id/goals/:goal" component={Goal} />
          <Route path="/fundraising/project/:id" component={Fundraising} />
          <Route path="/distribution/project/:id" component={Distribution} />
          <Route path="/" component={Projects} />
          <Redirect exact path="*" to="/" />
        </Switch>
        <GlobalStyle />
      </Fragment>
    </Router>
  </ApolloProvider>
);

export default App;
