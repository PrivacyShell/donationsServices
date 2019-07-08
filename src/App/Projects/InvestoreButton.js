import styled from 'styled-components';

const InvestorButton = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  padding: 3% 0;
  border-bottom-left-radius: 5px;
  color: #fff;
  text-transform: uppercase;
  background: #4854A1;
  border: 2px solid #fff;
  border-right: none;

  &:hover {
    cursor: pointer;
    color: #091D40;
  }
`;

export default InvestorButton;
