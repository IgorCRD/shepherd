import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { userShape } from 'components/user-sidebar';
import ShepherdAPI from 'api/shepherd-api';
import { saveUser } from 'actions/user-actions';
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
  };

  static defaultProps = {
    user: null,
    save: null,
  };

  componentDidMount() {
    const { user: { id }, save } = this.props;
    if (id && save) {
      ShepherdAPI.fetchUser(id).then(user => save(user));
    }
  }

  signOutClickHandler = () => {
    // eslint-disable-next-line no-console
    console.log('Sign out');
  };

  render() {
    const { user } = this.props;
    return user ? (
      <Navbar
        user={user}
        Avatar={() =>
          (Object.keys(user).length ? (
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
          ) : null)
        }
      />
    ) : (
      <Redirect to="/" />
    );
  }
}

function mapStateToProps({ user }) {
  return {
    user: { ...user.user },
  };
}

export default connect(mapStateToProps, { save: saveUser })(NavbarContainer);
