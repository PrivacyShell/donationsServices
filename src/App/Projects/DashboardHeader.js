import styled from 'styled-components';

const DashboardHeader = styled.h2`
  font-size: 3rem;
  color: #000;
  &::after {
    content: '';
    border-bottom: 2px solid #f18f35;
    position: relative;
    left: 50px;
    bottom: 0;
    height: 2px;
    width: 10%;
    display: block;
  }
`;

export default DashboardHeader;
