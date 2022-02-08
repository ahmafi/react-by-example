import logo from '../logo.svg';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
`;

const Text = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-left: 8px;
`;

function Title() {
  return (
    <Container>
      <Logo src={logo} />
      <Text>React By Example</Text>
    </Container>
  );
}

export default Title;
