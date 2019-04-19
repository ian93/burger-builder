import React from 'react';
import styled from 'styled-components';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => (
  <Aux>
    <Toolbar />
    <Content>{props.children}</Content>
  </Aux>
);

const Content = styled.main`
  margin-top: 72px;
`;

export default layout;
