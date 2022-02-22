import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListItem = styled.li`
  width: 26rem;
  height: 3.95rem;

  margin-bottom: 1.1rem;
  margin-left: 0.8rem;

  display: flex;
  align-items: center;

  border-radius: 6px;
  box-shadow: 2.5px 2.5px 3px ${({ theme }) => theme.colors.topShadow},
    -2px -2px 3px ${({ theme }) => theme.colors.botShadow};

  background-color: ${({ theme }) => theme.colors.background};

  cursor: pointer;

  @-moz-document url-prefix() {
    & {
      margin-right: 0.8rem;
    }
  }
`;

const ExampleLink = styled(Link)`
  width: 100%;
  line-height: 3.95rem;

  padding-right: 1rem;
  padding-left: 1rem;

  font-size: 1.8rem;

  user-select: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

/**
 *
 * @param {string} title The title of the example
 */
const titleToPath = (title) => title.replaceAll(' ', '-').toLowerCase();

function ExamplesListItem({ title }) {
  return (
    <ListItem>
      <ExampleLink to={titleToPath(title)}>{title}</ExampleLink>
    </ListItem>
  );
}

export default ExamplesListItem;
