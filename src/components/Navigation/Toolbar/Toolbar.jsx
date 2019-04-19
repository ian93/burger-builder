import React from 'react';
import styled from 'styled-components';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = props => (
  <Toolbar>
    <DrawerToggle click={props.clicked} />
    <LogoStyle>
      <Logo />
    </LogoStyle>
    <NavStyle>
      <NavigationItems />
    </NavStyle>
  </Toolbar>
);

const Toolbar = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
  nav {
    height: 100%
  }
`;

const LogoStyle = styled.div`
  height: 80%;
`;

const NavStyle = styled.nav`
  @media (max-width: 499px) {
    display: none;
  }
`;

export default toolbar;