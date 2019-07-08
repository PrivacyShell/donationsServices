import { Progress } from 'antd';
import React from 'react';
import styled from 'styled-components';

const RiskHeader = styled.h3`
    padding-top: 3%;
`;

const RiskBar = () => {
  return (
    <div style={{ padding: '0% 0%' }}>
      <RiskHeader>Venture Type</RiskHeader>
      <Progress percent={65} showInfo={true} strokeColor={'#f18f35'} strokeWidth={30} />
      <RiskHeader>Credentials</RiskHeader>
      <Progress percent={80} showInfo={true} strokeColor={'#f18f35'} strokeWidth={30} />
      <RiskHeader>Initial Capital</RiskHeader>
      <Progress percent={45} showInfo={true} strokeColor={'#f18f35'} strokeWidth={30} />
    </div>
  );
};


export default RiskBar;