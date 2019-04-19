import React from 'react';
import styled from 'styled-components';

const drawerToggle = props => (
  <DrawerToggle onClick={props.click}>
    <div />
    <div />
    <div />
  </DrawerToggle>
);

const DrawerToggle = styled.div`
  padding: 10px 0;
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  @media (min-width: 500px) {
    display: none;
  }
  div {
    width: 90%;
    height: 3px;
    background-color: white;
  }
`;

export default drawerToggle;