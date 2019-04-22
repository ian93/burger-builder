import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
`;

const app = () => (
  <Layout>
    <GlobalStyle />
    <BurgerBuilder />
  </Layout>
);

export default app;
