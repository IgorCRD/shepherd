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

  cursor: pointer;

  ${props =>
    props.selected === props.fullName &&
    ` color: white;
      background-color: rgb(30, 56, 73);
      content: '';
    `};
`;

class RepoItem extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    selected: PropTypes.string.isRequired,
    selectHander: PropTypes.func.isRequired,
  };

  onClickSelectHandler = () => {
    const { selectHander, fullName } = this.props;
    selectHander(fullName);
  };

  render() {
    const { fullName, name, selected } = this.props;

    return (
      <li>
        <Item
          name={name}
          fullName={fullName}
          selected={selected}
          onClick={this.onClickSelectHandler}
        >
          {name}
        </Item>
      </li>
    );
  }
}

export default RepoItem;
