import React from 'react';
import styled from 'styled-components';

const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: 360px;
  height: 44px;
  margin-bottom: 11px;
  margin-left: 8px;
  border-radius: 5px;
  box-shadow: 2.5px 2.5px 3px ${({ theme }) => theme.colors.darkShadow},
    -2px -2px 3px ${({ theme }) => theme.colors.lightShadow};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 1.2rem;
  padding-left: 10px;
`;

function ExamplesListItem(props) {
  return (
    <ListItem>
      <Text>{props.text}</Text>
    </ListItem>
  );
}

export default ExamplesListItem;
