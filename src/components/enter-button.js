import React from 'react';
import Flex from 'styled-flex-component';
import PropTypes from 'prop-types';
import CallForActionButton from 'components/call-for-action-button';
import { userShape } from 'components/user-sidebar';
import styled from 'styled-components';
import gitHubLogo from 'images/github-logo-white.svg';

const Img = styled.img`
  width: 2.5em;
  height: 2.5em;
  margin-left: 1em;
  border-radius: 50%;
`;

const ButtonContainer = styled.div`
  width: 9em;
`;

const EnterButton = ({ user, enterClickHandler }) => (
  <Flex justifyEnd>
    <ButtonContainer>
      <CallForActionButton clickHandler={enterClickHandler}>
        <Flex alignCenter>
          <span>{user ? 'Sign in as' : 'Sign up with'}</span>
          <Img src={user ? user.avatar_url : gitHubLogo} alt={user ? user.login : 'GitHub'} />
        </Flex>
      </CallForActionButton>
    </ButtonContainer>
  </Flex>
);

EnterButton.propTypes = {
  enterClickHandler: PropTypes.func,
  user: userShape,
};

EnterButton.defaultProps = {
  enterClickHandler: null,
  user: null,
};

export default EnterButton;
