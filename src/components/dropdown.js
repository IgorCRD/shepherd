import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UlDropDown = styled.ul`
  display: ${props => ({ show: 'block', hidden: 'none' }[props.visibility])};
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
  padding: 15px;
  margin-top: 2px;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 4px;
  box-shadow: 0 3px 12px rgba(27, 31, 35, 0.15);
  color: ${props => props.theme.fonts.primary.color};
  font-family: ${props => props.theme.fonts.secondary.fontFamily};
`;

const Dropdown = ({ children, visibility }) => (
  <UlDropDown visibility={visibility}>{children}</UlDropDown>
);

Dropdown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
  visibility: PropTypes.string.isRequired,
};

export default Dropdown;
