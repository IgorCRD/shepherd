import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import PropTypes from 'prop-types';
import BigHeader from 'components/big-header';
import media from 'styles/media';
import SubHeader from 'components/sub-header';

const CustomFlex = styled(Flex)`
  ${media.desktop`width: 40%`};
  ${media.tablet`width: 80%`};
  ${media.phone`width: 90%`};
`;

const WelcomeMessage = ({ SignUpContainer }) => (
  <CustomFlex column justifyCenter>
    <BigHeader>Put what matters together</BigHeader>
    <SubHeader>Monitor all your favorites GitHub repositories in a single place!</SubHeader>
    <SignUpContainer />
  </CustomFlex>
);

WelcomeMessage.propTypes = {
  SignUpContainer: PropTypes.func,
};

WelcomeMessage.defaultProps = {
  SignUpContainer: null,
};

export default WelcomeMessage;
