import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import UserSidebar, { userShape } from 'components/user-sidebar';
import ShepherdAPI from 'api/shepherd-api';
import { saveUser } from 'actions/user-actions';

class SidebarContainer extends React.Component {
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

  render() {
    const { user } = this.props;
    return user ? <UserSidebar user={user} /> : <Redirect to="/" />;
  }
}

function mapStateToProps({ user }) {
  return {
    user: { ...user.user },
  };
}

export default connect(mapStateToProps, { save: saveUser })(SidebarContainer);
