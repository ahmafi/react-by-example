import React from 'react';
import styled from 'styled-components';

const CodeBlockStyle = styled.div`
  min-height: 10rem;
  margin-bottom: 1rem;
  background-color: black;
  border: 2px solid red;
`;

function CodeBlock(props) {
  return <CodeBlockStyle>{props.children}</CodeBlockStyle>;
}

export default CodeBlock;
