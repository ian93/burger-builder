import React, { Component } from 'react';
import { styled, createGlobalStyle } from 'styled-components';

import Layout from '../components/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <Layout>
        <GlobalStyle />
        <BurgerBuilder />
      </Layout>
    );
  }
}

export default App;