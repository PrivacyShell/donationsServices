import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Query } from 'react-apollo';

import logo from '../shared/assets/logo.png';

import Dashboard from './Dashboard';
import Details from './ProjectDetails';
import Navigation from '../shared/components/Navigation';
import DashboardHeader from '../Projects/DashboardHeader';
import Container from '../Projects/Container';


const GET_PROJECT = gql`
  query GET_PROJECT($id: ID!) {
    getProject(id: $id) {
      id
      startDate
      endDate
      inveStone
      name
      investments {
        id
        amount
        dateTime
      }
    }
  }
`;

const Fundraising = ({ match }) => (
  <Query query={GET_PROJECT} variables={{ id: match.params.id }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      return (
        <Fragment>
          <Navigation title={<img alt="logo" src={logo} />} />
          <Container>
            <DashboardHeader>{data.getProject.name} Investors</DashboardHeader>
            <Dashboard data={data} />  
            <Details data={data} />
          </Container>   
        </Fragment>
      );
    }}
  </Query>
);

Fundraising.propTypes = {
  match: PropTypes.object,
};

Fundraising.defaultProps = {
  match: {},
};

export default Fundraising;
