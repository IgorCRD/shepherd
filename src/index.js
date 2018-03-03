import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/app';
import { BrowserRouter } from 'react-router-dom';
import BaseStyles from 'styles/base-styles';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/themes/naive-try';

const root = document.getElementById('app');
BaseStyles(); // inject base styles

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  root,
);
