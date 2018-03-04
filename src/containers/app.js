import React from 'react';
import { Route } from 'react-router-dom';
import WelcomePage from 'containers/welcome-page';

const App = () => (
  <React.Fragment>
    <Route exact path="/" render={() => <WelcomePage />} />
    <Route exact path="/authorization" render={() => <h1>{window.location.href}</h1>} />
  </React.Fragment>
);

export default App;
