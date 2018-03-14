import React from 'react';
import { Route } from 'react-router-dom';
import WelcomePage from 'components/welcome-page';
import AuthenticationContainer from 'containers/authentication-container';
import NavbarContainer from 'containers/navbar-container';
import CommitsContainer from 'containers/commits-container';
import SidebarContainer from 'containers/sidebar-container';
import Flex from 'styled-flex-component';

const possibleRoutes = ['/app', '/app/main', '/authentication'];

const App = () => (
  <Flex column full>
    <Route path="/" render={() => <NavbarContainer />} />
    <Flex>
      <Route path="/app" render={() => <SidebarContainer />} />
      <Route path="/app/main" render={() => <CommitsContainer />} />
    </Flex>
    <Route exact path="/" render={() => <WelcomePage />} />
    <Route exact path="/authentication" render={() => <AuthenticationContainer />} />
    {/* 404 route */}
    <Route
      path="*"
      render={({ match }) => {
        if (new RegExp(`^(?!(${possibleRoutes.join('|')}))`).test(match.url) && match.url !== '/') {
          return (
            <Flex column justifyCenter alignCenter>
              <h1>Error 404</h1>
              <h2>Sorry! the page you are looking for does not exist!</h2>
            </Flex>
          );
        }
        return '';
      }}
    />
  </Flex>
);

export default App;
