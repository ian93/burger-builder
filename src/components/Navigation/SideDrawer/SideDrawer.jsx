import React from 'react';
import styled from 'styled-components';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = props => {
  return (
    <Aux>
      <Backdrop show={props.open} click={props.clicked} />
      <SideDrawer show={props.open}>
        <LogoStyle>
          <Logo />
        </LogoStyle>
        <nav>
          <NavigationItems />
        </nav>
      </SideDrawer>
    </Aux>
  );
};

const SideDrawer = styled.div`
  padding: 32px 16px;
  width: 280px;
  height: 100%;
  max-width: 70%;
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  background-color: #fff;
  transition: transform 0.4s ease-out;
  z-index: 200;
  @media (min-width: 500px) {
    display: none;
  }
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)'}
`;

const LogoStyle = styled.div`
  height: 11%;
  margin-bottom: 32px;
`;

export default sideDrawer;
