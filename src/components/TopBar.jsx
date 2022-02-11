import logo from '../logo.svg';
import React from 'react';
import styled from 'styled-components';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';

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

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 0.5rem;
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 3px 3px 6px ${({ theme }) => theme.colors.topShadow},
    -3px -3px 6px ${({ theme }) => theme.colors.botShadow};
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

const MoonIcon = styled(BsMoonStarsFill)`
  width: 60%;
  height: 60%;

  background-color: ${({ theme }) => theme.colors.background};
  color: #142f86;
`;

const SunIcon = styled(BsSunFill)`
  width: 60%;
  height: 60%;

  background-color: ${({ theme }) => theme.colors.background};
  color: #f2c843;
`;

function TopBar({ className, theme, toggleTheme }) {
  return (
    <Container>
      <Logo src={logo} />
      <Text>React By Example</Text>
      <ThemeToggle onClick={toggleTheme}>
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </ThemeToggle>
    </Container>
  );
}

export default TopBar;
