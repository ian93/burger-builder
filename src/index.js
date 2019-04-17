import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Burger Builder';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('App')
);

module.hot.accept();