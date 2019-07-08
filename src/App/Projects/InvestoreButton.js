import styled from 'styled-components';

const InvestorButton = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  padding: 3% 0;
  border-bottom-left-radius: 5px;
  color: #000;
  text-transform: uppercase;
  background: #f1f1f1;
  border: 2px solid #000;
  border-right: none;

  &:hover {
    cursor: pointer;
    color: #f18f35;
  }
`;

export default InvestorButton;
