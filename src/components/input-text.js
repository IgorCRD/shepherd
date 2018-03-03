import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputTextStyle = styled.input`
  border-radius: 5px;
  border: grey solid 1px;
  padding: 0.8em;
  margin-right: 0.5em;
  width: 65%;

  &::placeholder {
    font-family: ${props => props.theme.fonts.secondary.fontFamily};
    color: ${props => props.theme.fonts.secondary.color};
  }
`;

const InputText = ({ placeHolder, innerRef }) => (
  <InputTextStyle innerRef={innerRef} placeholder={placeHolder} />
);

InputText.propTypes = {
  placeHolder: PropTypes.string,
  innerRef: PropTypes.func,
};

InputText.defaultProps = {
  placeHolder: null,
  innerRef: null,
};

export default InputText;
