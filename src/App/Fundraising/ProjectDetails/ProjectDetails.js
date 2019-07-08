import React from 'react';

import data from '../../shared/data/projectsData.json';

import Container from './Container';
import ProjectTable from './ProjectTable';
import Download from './Download';


const ProjectDetails = (props) => {
    return data.map(campaign => {
    if(props.id === campaign.id)
    return(
      <Container>
        <Download key="download" />
        <ProjectTable key="ProjectTable" idprops={props.id}/>
      </Container>
    );
  });
};

export default ProjectDetails;
