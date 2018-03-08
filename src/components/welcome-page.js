import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import WelcomeHero from 'components/welcome-hero';
import WelcomeMessage from 'components/welcome-message';
import media from 'styles/media';

const CustomFlex = styled(Flex)`
  justify-content: space-evenly;

  ${media.desktop`margin-top: 5em`};
  ${media.tablet`margin-top: 0em`};
  ${media.phone`margin-top: 0em`};
`;

const Welcome = () => (
  <CustomFlex alignCenter full wrap="wrap">
    <WelcomeMessage />
    <WelcomeHero />
  </CustomFlex>
);

export default Welcome;
