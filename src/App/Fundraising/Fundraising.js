import React, { Fragment } from 'react';
import styled from 'styled-components';

import data from '../../../src/App/shared/data/projectsData.json';

// import Dashboard from './Dashboard';
// import Details from './ProjectDetails';
import Navigation from '../shared/components/Navigation';
import DashboardHeader from '../Projects/DashboardHeader';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;
  border-bottom: 2px solid black;
`;

const Subtitle = styled.h3`
  font-size: 2rem;
  font-weight: 900;
`;

const TimePeriod = styled.p`
  font-size: 1.6rem;
  margin-bottom: 50px;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 5px;
`;

const Desc = styled.p`
  font-size: 1.4rem;
  color: #a9a8a8;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InfoSection = styled.div`
  width: 33.3%;
  margin-bottom: 20px;
`;

const InfoSectionTop = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const MainInfoContainer = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
`;


const Fundraising = (props) => {
    return data.map(campaign => {
    if(props.match.params.id === campaign.id)
    return (
      <Fragment>
        <Navigation />
        <Container>
          <DashboardHeader>{campaign.name}</DashboardHeader>
          <Subtitle>Activity of Investment in District</Subtitle>
          <TimePeriod>6 Month Period</TimePeriod>
          <MainInfoContainer>
            <InfoContainer>
              <InfoSectionTop>
                <Title>${campaign.raised}</Title>
                <Desc>Invested of ${campaign.inveStone}</Desc>
              </InfoSectionTop>
              <InfoSection>
                <Title>{campaign.sectors}</Title>
                <Desc>SECTORS</Desc>
              </InfoSection>
              <InfoSection>
                <Title>${campaign.topSector}</Title>
                <Desc>FISHING (TOP SECTOR)</Desc>
              </InfoSection>
              <InfoSection>
                <Title>${campaign.dailyActivity}</Title>
                <Desc>AVERAGE DAILY ACTIVITY</Desc>
              </InfoSection>
              <InfoSection>
                <Title>{campaign.usersPopulation}%</Title>
                <Desc>USERS FROM TOTAL POPULATION</Desc>
              </InfoSection>
              <InfoSection>
                <Title>${campaign.gvtTax}M</Title>
                <Desc>GCT SALES TAX</Desc>
              </InfoSection>
              <InfoSection>
                <Title>+{campaign.gdbGrowth}%</Title>
                <Desc>GDP GROWTH</Desc>
              </InfoSection>     
            </InfoContainer>
            {/* <Dashboard data={data} /> */}
            {/* <Details data={data} /> */}
          </MainInfoContainer>
        </Container>   
      </Fragment>
    );
  });

};

export default Fundraising;
