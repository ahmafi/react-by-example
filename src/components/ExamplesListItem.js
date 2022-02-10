import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  width: 26rem;
  min-height: 3.95rem;

  margin-bottom: 1.1rem;
  margin-left: 0.8rem;

  display: flex;
  align-items: center;

  border-radius: 6px;
  box-shadow: 2.5px 2.5px 3px ${({ theme }) => theme.colors.darkShadow},
    -2px -2px 3px ${({ theme }) => theme.colors.lightShadow};

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  cursor: pointer;

  @-moz-document url-prefix() {
    & {
      margin-right: 0.8rem;
    }
  }
`;

const Text = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;

  font-size: 1.8rem;

  user-select: none;
`;

function ExamplesListItem(props) {
  return (
    <ListItem>
      <Text>{props.text}</Text>
    </ListItem>
  );
}

export default ExamplesListItem;
