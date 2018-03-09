import React from 'react';
import { Route } from 'react-router-dom';
import WelcomePage from 'components/welcome-page';
import AuthenticationContainer from 'containers/authentication-container';
import FullScreenFlex from 'styles/full-screen-flex';
import NavBar from 'components/navbar';
import RepositoriesContainer from 'containers/repositories-container';
import SidebarContainer from 'containers/sidebar-container';
import Flex from 'styled-flex-component';

const App = () => (
  <FullScreenFlex column>
    <Route path="/" render={() => <NavBar />} />
    <Flex>
      <Route path="/app" render={() => <SidebarContainer />} />
      <Route path="/app/repositories" render={() => <RepositoriesContainer />} />
    </Flex>
    <Route exact path="/" render={() => <WelcomePage />} />
    <Route exact path="/authentication" render={() => <AuthenticationContainer />} />
  </FullScreenFlex>
);

export default App;
