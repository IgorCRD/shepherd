import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CallForActionButtonStyle = styled.button`
  border-radius: 5px;
  border: 0;
  background-color: ${props => props.theme.colors.success};
  padding: 0.8em;
  margin-right: 0.5em;
  width: 30%;
  color: white;
  font-family: ${props => props.theme.fonts.secondary.fontFamily};
`;

const CallForActionButton = ({ children, clickHandler }) => (
  <CallForActionButtonStyle onClick={clickHandler}>{children}</CallForActionButtonStyle>
);

CallForActionButton.propTypes = {
  children: PropTypes.element,
  clickHandler: PropTypes.func,
};

CallForActionButton.defaultProps = {
  children: null,
  clickHandler: null,
};

export default CallForActionButton;
