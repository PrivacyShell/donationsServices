import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import React, { Fragment } from 'react';
import styled from 'styled-components';

import logo from '../shared/assets/logo.png';

import Container from '../Projects/Container';
import DashboardHeader from '../Projects/DashboardHeader';
import DistributionChart from './Charts/DistributionChart';
import DistributionStats from './DistributionStats';
import Overview from './Overview';
import Navigation from '../shared/components/Navigation';
import ProofData from './Charts/ProofData';
import SpendPerGoal from './Charts/SpendPerGoal';

const GET_PROJECT = gql`
  query getProject($id: ID!) {
    getProject(id: $id) {
      name
      inveStone
      spent
      investments {
        amount
      }
      goals {
        id
        dateTime
        expenses {
          id
          amount
          dateTime
          description
        }
        proofs {
          id
        }
      }
    }
  }
`;

const Box = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  align-self: center;
  justify-self: center;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 85vh;
`;

const PieCharts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding-bottom: 3%;
`;

const Distribution = ({ match }) => {
  const { id } = match.params;
  return (
    <Query query={GET_PROJECT} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <Fragment>
            <Navigation title={<img alt="logo" src={logo} />} />
            <Container>
              <DashboardHeader>{data.getProject.name} Distribution</DashboardHeader>
            </Container>
            <Layout>
              <Box style={{ display: 'grid', gridTemplateRows: '1fr 4fr' }}>
                <h3>Investment distribution over Time</h3>
                <DistributionChart data={data} />
              </Box>
              <DistributionStats data={data} />
              <Box>
                <PieCharts>
                  <Box style={{ display: 'grid', gridTemplateRows: '1fr 4fr' }}>
                    <h3 style={{ margin: '1% auto' }}>Spend per InveStone</h3>
                    <SpendPerGoal data={data} />
                  </Box>
                  <Box style={{ display: 'grid', gridTemplateRows: '1fr 4fr' }}>
                    <h3 style={{ margin: '1% auto' }}>Proof Data per InveStone</h3>
                    <ProofData data={data} />
                  </Box>
                </PieCharts>
              </Box>
              <Overview data={data} projectId={id} />
            </Layout>
          </Fragment>
        );
      }}
    </Query>
  );
};

Distribution.propTypes = {
  match: PropTypes.object,
};

Distribution.defaultProps = {
  match: {},
};

export default Distribution;
