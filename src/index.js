import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';

import App from 'containers/app';
import BaseStyles from 'styles/base-styles';
import theme from 'styles/themes/naive-try';
import reducer from 'reducers';
import { loadState, saveState } from 'root/localStorage';

const root = document.getElementById('app');
BaseStyles(); // inject base styles

/* eslint-disable no-console */
const logger = store => next => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};
/* eslint-enable no-console */

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();
const store = createStore(reducer, persistedState, composeEnhancers(applyMiddleware(logger)));
store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  root,
);
