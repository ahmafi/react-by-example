import React from 'react';
import styled from 'styled-components';
import ExamplesListItem from './ExamplesListItem';

const Container = styled.div`
  margin-top: 16px;
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
