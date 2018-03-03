import React from 'react';
import Flex from 'styled-flex-component';
import InputText from 'components/input-text';
import CallForActionButton from 'components/call-for-action-button';

const SignUpContainer = () => (
  <Flex>
    <InputText placeHolder="Enter your email address" />
    <CallForActionButton>Sign Up</CallForActionButton>
  </Flex>
);

export default SignUpContainer;
