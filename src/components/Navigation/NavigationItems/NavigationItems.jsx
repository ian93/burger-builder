import React from 'react';
import styled from 'styled-components';

import Li from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <Ul>
    <Li link="/" active>Burger Builder</Li>
    <Li link="/">Checkout</Li>
  </Ul>
);

const Ul = styled.li`
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  list-style: none;
  @media (min-width: 500px) {
    flex-flow: row;
  }
`;

export default navigationItems;