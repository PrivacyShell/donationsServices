import React from 'react';
import styled from 'styled-components';

import { Button } from 'antd';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const Download = () => (
  <Container>
    <Button>CSV Download</Button>
  </Container>
);

export default Download;
