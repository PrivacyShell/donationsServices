import styled from 'styled-components';

const DashboardHeader = styled.h2`
  font-size: 3rem;
  color: #fff;
  padding-top: 150px;
  &::after {
    content: '';
    border-bottom: 2px solid #4854A1;
    position: relative;
    bottom: 0;
    height: 2px;
    width: 100%;
    display: block;
  }
`;

export default DashboardHeader;
