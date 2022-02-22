import React from 'react';
import { useParams } from 'react-router-dom';

function Example() {
  const { exampleName } = useParams();

  return <div>{exampleName}</div>;
}

export default Example;
