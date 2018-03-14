import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import UserSidebar, { userShape } from 'components/user-sidebar';
import ShepherdAPI from 'api/shepherd-api';
import { saveUser } from 'actions/user-actions';
import MonitoredReposContainer from 'containers/monitored-repos-container';

const HorizontalLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: #bbb;
  margin: 1.5em 0 1.5em 0;
`;

const SideBar = styled(Flex)`
  max-width: 15%;
`;

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
    return user ? (
      <SideBar column>
        <UserSidebar user={user} />
        <HorizontalLine />
        <MonitoredReposContainer />
      </SideBar>
    ) : (
      <Redirect to="/" />
    );
  }
}

function mapStateToProps({ user }) {
  return {
    user,
  };
}

export default connect(mapStateToProps, { save: saveUser })(SidebarContainer);
