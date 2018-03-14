import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'components/dropdown';

class DropdownContainer extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
      .isRequired,
    Ancor: PropTypes.func.isRequired,
  };

  state = {
    visibility: 'hidden', // show || hidden
  };

  componentDidMount() {
    window.addEventListener('click', this.onClickOutSide);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutSide);
  }

  onClickOutSide = (event) => {
    if (event.target !== this.eventsDiv) {
      this.setState(() => ({
        visibility: 'hidden',
      }));
    }
  };

  ancorOnClickHandler = (event) => {
    event.stopPropagation();
    this.setState(previousState => ({
      visibility: previousState.visibility === 'hidden' ? 'show' : 'hidden',
    }));
  };

  render() {
    const { children, Ancor } = this.props;
    const { visibility } = this.state;

    return (
      <div
        tabIndex="-1"
        role="button"
        onClick={this.ancorOnClickHandler}
        style={{ outline: 'none', position: 'relative', cursor: 'pointer' }}
        ref={(divref) => {
          this.eventsDiv = divref;
        }}
      >
        <Ancor />
        <Dropdown visibility={visibility}>{children}</Dropdown>
      </div>
    );
  }
}

export default DropdownContainer;
