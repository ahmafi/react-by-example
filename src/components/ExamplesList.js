import React from 'react';
import styled from 'styled-components';
import ExamplesListItem from './ExamplesListItem';

const Container = styled.ul`
  position: fixed;

  height: calc(100% - ${({ theme }) => theme.values.topBarHeight});

  margin-right: 1rem;
  margin-top: 6rem;

  padding-top: 1rem;
  padding-right: 1.2rem;

  overflow: hidden;
  &:hover {
    overflow-y: auto;
  }
  /* overflow-y: auto; causes a bug on firefox (overlaps on the content) */
  /* it's better visible if the child elements use width: 100% */
  /* https://bugzilla.mozilla.org/show_bug.cgi?id=764076 */
  /* line below is a workaround for firefox 97+, still an issue on older ones */
  /* scrollbar-gutter: stable; */

  overscroll-behavior: contain;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 3px;
    box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightShadow} inset,
      -3px -3px 4px ${({ theme }) => theme.colors.darkShadow} inset;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.text};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.text2};
  }
`;

const data = [
  'Hello World',
  'Introducing JSX',
  'Rendering Elements',
  'Components and Props',
  'State and Lifecycle',
  'Handling Events',
  'Conditional Rendering',
  'Lists and Keys',
  'Forms',
  'Lifting State Up',
  'Composition vs Inheritance',
  'Thinking In React',
  'Hello World',
  'Introducing JSX',
  'Rendering Elements',
  'Components and Props',
  'State and Lifecycle',
  'Handling Events',
  'Conditional Rendering',
  'Lists and Keys',
  'Forms',
  'Lifting State Up',
  'Composition vs Inheritance',
  'Thinking In React',
];

function ExamplesList() {
  return (
    <Container>
      {data.map((item) => (
        <ExamplesListItem text={item} />
      ))}
    </Container>
  );
}

export default ExamplesList;
