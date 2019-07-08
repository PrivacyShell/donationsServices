import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BackButton from './BackButton';
import Title from './Title';

const Nav = styled.nav`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1% 0;
  margin-bottom: 150px;
  background-color: #fff;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

const Container = styled.nav`
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

const Test = styled.h2`
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: uppercase;
  color: #091D40;
`;

const Span = styled.span`
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: uppercase;
  color: #F3BB65;
`;

const Navigation = ({ title }) => (
    <Nav>
      <Container>
        <BackButton />
        <Title><Test>Donations <Span>Services</Span></Test></Title>
      </Container>
    </Nav>
);

Navigation.propTypes = {
  title: PropTypes.string,
};

Navigation.defaultProps = {
  title: '',
};

export default Navigation;
