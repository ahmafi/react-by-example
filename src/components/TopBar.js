import logo from '../logo.svg';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;

  width: 100%;
  height: ${({ theme }) => theme.values.topBarHeight};

  z-index: 1;

  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

const Logo = styled.img`
  width: 5rem;
`;

const Text = styled.div`
  margin-left: 0.5rem;

  text-align: center;

  font-size: 2rem;
`;

function TopBar() {
  return (
    <Container>
      <Logo src={logo} />
      <Text>React By Example</Text>
    </Container>
  );
}

export default TopBar;
