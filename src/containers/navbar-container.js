import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { userShape } from 'components/user-sidebar';
import ShepherdAPI from 'api/shepherd-api';
import { saveUser, logout } from 'actions/user-actions';
import Navbar from 'components/navbar';
import DropdownContainer from 'containers/dropdown-container';
import DropdownIcon from 'components/dropdown-icon';

const AvatarImg = styled.img`
  border-radius: 50%;
  border: ${props => props.theme.colors.detail} solid 0.1em;
  width: 2em;
`;

const UserLogin = styled.div`
  color: ${props => props.theme.fonts.primary.color};
  font-family: ${props => props.theme.fonts.secondary.fontFamily};
  align-self: center;
`;

class NavbarContainer extends React.Component {
  static propTypes = {
    user: userShape,
    save: PropTypes.func,
    logout: PropTypes.func,
  };

  static defaultProps = {
    user: null,
    save: null,
    logout: null,
  };

  componentDidMount() {
    const { user, save } = this.props;
    if (user && user.id && save) {
      ShepherdAPI.fetchUser(user.id).then(updatedUser => save(updatedUser));
    }
  }

  signOutClickHandler = () => {
    const { logout: logoutUser } = this.props;
    logoutUser();
  };

  render() {
    const { user } = this.props;
    return (
      <Navbar
        user={user}
        Avatar={() =>
          user && (
            <DropdownContainer
              Ancor={() => (
                <Flex full justifyEnd alignCenter>
                  <UserLogin>{user.login}</UserLogin>
                  <DropdownIcon />
                  <div>
                    <AvatarImg src={user.avatar_url} />
                  </div>
                </Flex>
              )}
            >
              <Link to="/" onClick={this.signOutClickHandler}>
                Sign out
              </Link>
            </DropdownContainer>
          )
        }
      />
    );
  }
}

function mapStateToProps({ user }) {
  return {
    user,
  };
}

export default connect(mapStateToProps, { save: saveUser, logout })(NavbarContainer);
