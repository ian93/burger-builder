import React from 'react';
import styled from 'styled-components';

import BurgerLogo from '../../assets/images/burger-logo.png';

const logo = () => (
  <Logo>
    <img src={BurgerLogo} alt="BurgerLogo" />
  </Logo>
);

const Logo = styled.div`
  padding: 8px;
  height: 80%;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fff;
  img {
    height: 100%;
  }
`;

export default logo;