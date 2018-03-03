import React from 'react';
import { Route } from 'react-router-dom';
import WelcomePage from 'containers/welcome-page';

const App = () => (
  <React.Fragment>
    <Route exact path="/" render={() => <WelcomePage />} />
  </React.Fragment>
);

export default App;
