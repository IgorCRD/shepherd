import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import WelcomePage from 'containers/welcome-page';
import SimpleReact from 'components/simple-react';

const App = () => (
  <React.Fragment>
    <Route exact path="/" render={() => <Redirect to="welcome" />} />
    <Route exact path="/simple-react" render={() => <SimpleReact />} />
    <Route exact path="/welcome" render={() => <WelcomePage />} />
  </React.Fragment>
);

export default App;
