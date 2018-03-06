import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import WelcomeHero from 'components/welcome-hero';
import WelcomeMessage from 'components/welcome-message';
import media from 'styles/media';
import FullScreenFlex from 'styles/full-screen-flex';
import SignUpContainer from 'containers/signup-container';
import NavBar from 'containers/navbar';

const CustomFlex = styled(Flex)`
  justify-content: space-evenly;

  ${media.desktop`margin-top: 5em`};
  ${media.tablet`margin-top: 0em`};
  ${media.phone`margin-top: 0em`};
`;

const Welcome = () => (
  <FullScreenFlex column>
    <NavBar />
    <CustomFlex alignCenter full wrap="wrap">
      <WelcomeMessage SignUpContainer={() => <SignUpContainer />} />
      <WelcomeHero />
    </CustomFlex>
  </FullScreenFlex>
);

export default Welcome;
