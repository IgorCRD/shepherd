import React from 'react';
import Flex from 'styled-flex-component';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CallForActionButton from 'components/call-for-action-button';
import gitHubLogo from 'images/github-logo-white.svg';

const Img = styled.img`
  width: 2.5em;
  height: 2.5em;
  margin-left: 1em;
`;

const ButtonContainer = styled.div`
  width: 9em;
`;

const signupButton = ({ signUpClickHandler }) => (
  <Flex justifyEnd>
    <ButtonContainer>
      <CallForActionButton clickHandler={signUpClickHandler}>
        <Flex alignCenter>
          <span>Sign up with</span>
          <Img src={gitHubLogo} alt="GitHub" />
        </Flex>
      </CallForActionButton>
    </ButtonContainer>
  </Flex>
);

signupButton.propTypes = {
  signUpClickHandler: PropTypes.func,
};

signupButton.defaultProps = {
  signUpClickHandler: null,
};

export default signupButton;
