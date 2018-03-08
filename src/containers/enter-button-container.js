import React from 'react';
import { withRouter } from 'react-router-dom';
import config from 'config';
import routerPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import { userShape } from 'components/user-sidebar';
import EnterButton from 'components/enter-button';

class EnterButtonContainer extends React.Component {
  static propTypes = {
    history: routerPropTypes.history,
    location: routerPropTypes.location,
    user: userShape,
  };

  static defaultProps = {
    history: null,
    location: null,
    user: null,
  };

  enterClickHandler = () => {
    const { history, location } = this.props;
    if (window && history && location) {
      const { clientId } = config;
      history.push(location.path);
      window.location.replace(config.githubOauthUrl(clientId));
    }
  };

  render() {
    const { user } = this.props;
    return <EnterButton user={user} enterClickHandler={this.enterClickHandler} />;
  }
}

function mapStateToProps({ user }) {
  return {
    user: user.user,
    logged: user.user && Object.keys(user).length > 0,
  };
}

export default connect(mapStateToProps, null)(withRouter(EnterButtonContainer));
