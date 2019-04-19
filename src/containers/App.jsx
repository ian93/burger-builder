import React, { Component } from 'react';
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

class App extends Component {
  state = {
    build: true
  };

  render() {
    return (
      <Layout>
        <GlobalStyle />
        {this.state.build ? <BurgerBuilder /> : null}
      </Layout>
    );
  }
}

export default App;