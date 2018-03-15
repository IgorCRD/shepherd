import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import TrashBin from 'images/trash-bin.svg';

const Item = styled(Flex)`
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

const RemoveButton = styled(Flex)`
  background-color: red;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  color: white;
`;

class RepoItem extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    selected: PropTypes.string.isRequired,
    selectHander: PropTypes.func.isRequired,
    removeRepo: PropTypes.func.isRequired,
  };

  onClickSelectHandler = () => {
    const { selectHander, fullName } = this.props;
    selectHander(fullName);
  };

  onClickRemove = (event) => {
    event.stopPropagation();
    const { removeRepo, fullName, selectHander } = this.props;

    removeRepo(fullName);
    selectHander('All');
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
          {name !== 'All' && (
            <Flex full justifyEnd onClick={this.onClickRemove}>
              <RemoveButton justifyCenter alignCenter>
                <img src={TrashBin} alt="Trash bin" style={{ width: '11px' }} />
              </RemoveButton>
            </Flex>
          )}
        </Item>
      </li>
    );
  }
}

export default RepoItem;
