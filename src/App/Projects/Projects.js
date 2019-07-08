import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import data from '../../../src/App/shared/data/projectsData.json';

import Navigation from '../shared/components/Navigation';

import CampaignHeader from './CampaignHeader';
import CardContainer from './CardContainer';
import CardGraph from './CardGraph';
import CompanyName from './CompanyName';
import Container from './Container';
import DashboardHeader from './DashboardHeader';
import Description from './Description';
import DistributionButton from './DistributionButton';
import Goal from './Goal';
import InveStone from './InveStone';
import InvestorButton from './InvestoreButton';
import ProjectsContainer from './ProjectsContainer';
import Project from './Project';
import ProjectName from './ProjectName';
import Raised from './Raised';

const Projects = () => {
    const campaigns = data.map(campaign => {
      return campaign;
    });

        return (
          <Fragment>
            <Navigation/>
            <Container>
              <DashboardHeader>Country: Somalia</DashboardHeader>
              <ProjectsContainer>
                {campaigns.map(campaign => (
                  <Project key={campaign.name} className={campaign.image}>
                    <CampaignHeader>
                      <CompanyName>{campaign.name}</CompanyName>
                      <ProjectName>{campaign.projectName}</ProjectName>
                      <Description>{campaign.description}</Description>
                    </CampaignHeader>
                    <InveStone>
                      <Goal>
                        Goal for 2022<span>${campaign.inveStone}</span>
                      </Goal>
                      <CardContainer>
                        <CardGraph />
                      </CardContainer>
                      <Raised>
                        Raised<span>${campaign.raised}</span>
                      </Raised>
                    </InveStone>
                    <Link to={`/fundraising/project/${campaign.id}`}>
                      <InvestorButton>Investors</InvestorButton>
                    </Link>
                    {/* <Link to={`/distribution/project/${campaign.id}`}>
                      <DistributionButton>Distribution</DistributionButton>
                    </Link> */}
                  </Project>
                ))}
              </ProjectsContainer>
            </Container>
          </Fragment>
        );
      };

export default Projects;
