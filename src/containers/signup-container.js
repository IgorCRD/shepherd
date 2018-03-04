import React from 'react';
import Flex from 'styled-flex-component';
import InputText from 'components/input-text';
import CallForActionButton from 'components/call-for-action-button';
import config from 'config';

class SignUpContainer extends React.Component {
  signUpClickHandler = () => {
    if (window) {
      const { clientId, githubOauthRedirectUrl } = config;
      window.location.replace(config.githubOauthUrl(clientId, githubOauthRedirectUrl));
      // https://gitswatcherio.localtunnel.me/authorization?code=d6defcf70c79d3a49e26
    }
  };

  render() {
    return (
      <Flex>
        <InputText placeHolder="Enter your email address" />
        <CallForActionButton clickHandler={this.signUpClickHandler}>Sign Up</CallForActionButton>
      </Flex>
    );
  }
}

export default SignUpContainer;
