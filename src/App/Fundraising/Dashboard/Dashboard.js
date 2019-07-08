import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styled from 'styled-components';

import Container from './Container';
import Histogram from './Histogram';
import Info from './Info';
import RiskBar from './RiskBar/RiskBar';
// import Navigation from '../../shared/components/Navigation';

const HistogramContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 5%;
`;

const Dashboard = ({ data }) => (
  <Fragment>
    {/* <Navigation title={data.getProject.name} /> */}
    <Container>
      <Info data={data} />
    </Container>
    
    <HistogramContainer>
      <div>
        <h2>Investments over time</h2>
        <Histogram data={data} />
      </div>
      <div>
      <h2>Risk Indicators</h2>
          <RiskBar />
      </div>    
    </HistogramContainer>
  </Fragment>
);

Dashboard.propTypes = {
  data: PropTypes.object,
};

Dashboard.defaultProps = {
  data: {},
};

export default Dashboard;
