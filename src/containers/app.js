import React from 'react';
import { Route } from 'react-router-dom';
import WelcomePage from 'components/welcome-page';
import AuthenticationContainer from 'containers/authentication-container';
import FullScreenFlex from 'styles/full-screen-flex';
import NavBar from 'components/navbar';
import Main from 'containers/main';
import UsersideBar from 'components/user-sidebar';

const App = () => (
  <FullScreenFlex column>
    <Route path="/" render={() => <NavBar />} />
    <Route exact path="/" render={() => <WelcomePage />} />
    <Route exact path="/authentication" render={() => <AuthenticationContainer />} />
    <Route path="/app" render={() => <UsersideBar />} />
    <Route exact path="/app/main" render={() => <Main />} />
  </FullScreenFlex>
);

export default App;
