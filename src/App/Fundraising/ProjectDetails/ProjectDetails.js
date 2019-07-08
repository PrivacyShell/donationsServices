import React from 'react';
import styled from 'styled-components';

import data from '../../shared/data/projectsData.json';

import Container from './Container';
import ProjectTable from './ProjectTable';
import Download from './Download';

const HeadingConatiner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: #091D40;
`;


const ProjectDetails = (props) => {
    return data.map(campaign => {
    if(props.id === campaign.id)
    return(
      <Container>
        <HeadingConatiner>
          <Title>User Transactions from App</Title>
          <Download key="download" />
        </HeadingConatiner>
        <ProjectTable key="ProjectTable" idprops={props.id}/>
      </Container>
    );
  });
};

export default ProjectDetails;
