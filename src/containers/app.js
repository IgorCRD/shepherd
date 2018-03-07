import React from 'react';
import { Route } from 'react-router-dom';
import WelcomePage from 'containers/welcome-page';
import AuthenticationContainer from 'containers/authentication-container';

const App = () => (
  <React.Fragment>
    <Route exact path="/" render={() => <WelcomePage />} />
    <Route exact path="/authorization" render={() => <AuthenticationContainer />} />
  </React.Fragment>
);

export default App;
