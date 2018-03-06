import React from 'react';
import { withRouter } from 'react-router-dom';
import SignUpButton from 'components/signup-button';
import config from 'config';
import routerPropTypes from 'react-router-prop-types';

class SignUpContainer extends React.Component {
  propTypes = {
    history: routerPropTypes.history,
    location: routerPropTypes.location,
  };

  signUpClickHandler = () => {
    if (window && this.props.history && this.props.location) {
      const { clientId, githubOauthRedirectUrl } = config;
      this.props.history.push(this.props.location.path);
      window.location.replace(config.githubOauthUrl(clientId, githubOauthRedirectUrl));
    }
  };

  render() {
    return <SignUpButton signUpClickHandler={this.signUpClickHandler} />;
  }
}

export default withRouter(SignUpContainer);
