import React from 'react';
import styled from 'styled-components';

const navigationItem = props => (
  <NavigationItem>
    <a
      className={props.active ? 'active' : null}
      href={props.link}
    >
      {props.children}
    </a>
  </NavigationItem>
);

const NavigationItem = styled.li`
  margin: 10px 0;
  width: 100%;
  display: block;
  box-sizing: border-box;
  a {
    width: 100%;
    display: block;
    box-sizing: border-box;
    color: #8f5c2c;
    text-decoration: none;
    :hover,
    :active,
    &.active {
      color: #40a4c8;
    }
  }
  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    width: auto;
    height: 100%;
    align-items: center;
    a {
      padding: 16px 10px;
      height: 100%;
      color: #fff;
      border-bottom: 4px solid transparent;
      :hover,
      :active,
      &.active {
        color: #fff;
        background-color: #8f5c2c;
        border-bottom: 4px solid #40a4c8;
      }
    }
  }
`;

export default navigationItem;
