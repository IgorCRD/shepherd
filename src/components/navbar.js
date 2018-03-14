import React from 'react';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import blackShepherd from 'images/shepherd-black.svg';
import Titles from 'components/titles';
import media from 'styles/media';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Img = styled.img`
  width: 3.5em;
  height: 3.5em;
`;

const FlexNavBarContainer = styled(Flex)`
  ${media.desktop`padding: 0.5em 1.5em 0.5em 3em;`};
  ${media.tablet`padding: 0.5em 1em 0.5em 2em;`};
  ${media.phone`padding: 0.5em 0.5em 0.5em 1em;`};

  border-bottom: 1px solid grey;
  margin-bottom: 2em;
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

const Navbar = ({ Avatar }) => (
  <FlexNavBarContainer alignCenter>
    <Link to="/">
      <Img src={blackShepherd} alt="A shepherd dog" />
    </Link>
    <VerticalDash />
    <Titles>Shepherd</Titles>
    <Flex full justifyEnd alignCenter>
      <Avatar />
    </Flex>
  </FlexNavBarContainer>
);

Navbar.propTypes = {
  Avatar: PropTypes.func,
};

Navbar.defaultProps = {
  Avatar: null,
};

export default Navbar;
