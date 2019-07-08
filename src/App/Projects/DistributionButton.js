import styled from 'styled-components';

const DistributionButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  padding: 3% 0;
  border-bottom-right-radius: 5px;
  color: #000;
  text-transform: uppercase;
  background: #f1f1f1;
  border: 2px solid #000;

  &:hover {
    cursor: pointer;
    color: #f18f35;
  }
`;

export default DistributionButton;
