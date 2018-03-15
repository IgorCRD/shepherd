import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'components/dropdown';

class DropdownContainer extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
      .isRequired,
    Ancor: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onClick: null,
    onChange: null,
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

  show = (shouldShow) => {
    this.setState(() => ({
      visibility: shouldShow ? 'show' : 'hidden',
    }));
  };

  render() {
    const {
      children, Ancor, onClick, onChange,
    } = this.props;
    const { visibility } = this.state;

    return (
      <div
        tabIndex="-1"
        role="button"
        onClick={onClick ? event => onClick(event, this.show) : this.ancorOnClickHandler}
        onChange={event => onChange({ ...event }, this.show)}
        style={{ outline: 'none', position: 'relative' }}
        ref={(divref) => {
          this.eventsDiv = divref;
        }}
      >
        <div style={{ cursor: 'pointer' }}>
          <Ancor />
        </div>
        <Dropdown visibility={visibility}>{children}</Dropdown>
      </div>
    );
  }
}

export default DropdownContainer;
