import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.div`
  border-radius: 4px;

  padding: 12px;
  padding-left: 15px;

  font-family: ${props => props.theme.fonts.secondary.fontFamily};
  font-size: 14px;
  letter-spacing: 0.5px;

  ${props =>
    props.selected === props.name &&
    ` color: white;
      background-color: rgb(30, 56, 73);
      content: '';
    `};
`;

const RepoItem = ({ name, selected }) => (
  <li>
    <Item name={name} selected={selected}>
      {name}
    </Item>
  </li>
);

RepoItem.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
};

export default RepoItem;
