import styled from 'styled-components';

const ActiveProjects = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  grid-gap: 1%;
  margin-bottom: 32px;
  position: relative;
`;

export default ActiveProjects;
