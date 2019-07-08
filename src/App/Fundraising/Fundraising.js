import React, { Fragment } from 'react';
import styled from 'styled-components';

import data from '../../../src/App/shared/data/projectsData.json';

// import Dashboard from './Dashboard';
import ProjectDetails from './ProjectDetails';
import Navigation from '../shared/components/Navigation';
import DashboardHeader from '../Projects/DashboardHeader';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;
`;

const ContainerWithBorder = styled.div`
  margin: 20px auto;
  max-width: 1200px;
  width: 90%;
  border-top: 2px solid #4854A1;
`;

const Subtitle = styled.h3`
  font-size: 2rem;
  font-weight: 900;
  color: #fff;
`;

const TimePeriod = styled.p`
  font-size: 1.6rem;
  margin-bottom: 50px;
  color: #4854A1;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 5px;
  color: #fff;
`;

const Desc = styled.p`
  font-size: 1.4rem;
  color: #4854A1;
`;

const Disclaimer = styled.p`
  font-size: 1.4rem;
  color: #fff;
  margin-top: 5px;
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

const TableContainer = styled.div`
  width: 80%;
  margin: 50px auto;
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
          </MainInfoContainer>
        </Container>
        <ContainerWithBorder>
          <Disclaimer>*Please note that all $ values correspond to your Countries' currency created by Donations.Services which is pegged to the US Dollar</Disclaimer>   
        </ContainerWithBorder>
        <TableContainer>
          <ProjectDetails data={data} id={props.match.params.id} />
        </TableContainer>
      </Fragment>
    );
  });

};

export default Fundraising;
