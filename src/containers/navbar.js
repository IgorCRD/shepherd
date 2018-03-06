import React from 'react';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import blackShepherd from 'images/shepherd-black.svg';
import Titles from 'components/titles';
import media from 'styles/media';

const Img = styled.img`
  width: 3.5em;
  height: 3.5em;
`;

const FlexNavBarContainer = styled(Flex)`
  ${media.desktop`padding: 0.5em 1.5em 0.5em 3em;`};
  ${media.tablet`padding: 0.5em 1em 0.5em 2em;`};
  ${media.phone`padding: 0.5em 0.5em 0.5em 1em;`};

  border-bottom: 1px solid grey;
`;

const VerticalDash = styled.div`
  height: 2em;
  width: 1px;
  background-color: #bbb;
  margin: 0 1.5em 0 1.5em;

  ${media.desktop`display: auto`};
  ${media.tablet`display: auto`};
  ${media.phone`display: none`};
`;

const Navbar = () => (
  <FlexNavBarContainer alignCenter>
    <Img src={blackShepherd} alt="A shepherd dog" />
    <VerticalDash />
    <Titles>Shepherd</Titles>
  </FlexNavBarContainer>
);

export default Navbar;
