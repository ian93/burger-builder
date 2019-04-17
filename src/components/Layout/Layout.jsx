import React from 'react';
import styled from 'styled-components';

import Aux from '../../hoc/Aux';

const Main = styled.main`
  margin-top: 16px;
`;

const layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <Main>{props.children}</Main>
  </Aux>
);

export default layout;
