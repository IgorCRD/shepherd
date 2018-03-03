import React from 'react';
import styled from 'styled-components';
import ProgrammerMaleSvg from 'images/programmer-male.svg';
import media from 'styles/media';

const Squarediv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.desktop`width: 35%`};
  ${media.tablet`width: 80%`};
  ${media.phone`width: 90%`};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const WelcomeHero = () => (
  <Squarediv>
    <Img
      src={ProgrammerMaleSvg}
      alt="A male programmer beside a server rack monitoring servers with his laptop"
    />
  </Squarediv>
);

export default WelcomeHero;
