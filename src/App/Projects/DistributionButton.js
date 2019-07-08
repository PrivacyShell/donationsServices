import styled from 'styled-components';

const DistributionButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  padding: 3% 0;
  border-bottom-right-radius: 5px;
  color: #fff;
  text-transform: uppercase;
  background: #4854A1;
  border: 2px solid #fff;

  &:hover {
    cursor: pointer;
    color: #091D40;
  }
`;

export default DistributionButton;
