import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/app';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  root,
);
