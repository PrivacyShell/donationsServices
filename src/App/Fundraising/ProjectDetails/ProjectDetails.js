import PropTypes from 'prop-types';
import React from 'react';

import Container from './Container';
import ProjectTable from './ProjectTable';
import Download from './Download';

const ProjectDetails = ({ data }) => (
  <Container>
    <Download key="download" />
    <ProjectTable key="ProjectTable" data={data} />
  </Container>
);

ProjectDetails.propTypes = {
  data: PropTypes.object,
};

ProjectDetails.defaultProps = {
  data: {},
};

export default ProjectDetails;
