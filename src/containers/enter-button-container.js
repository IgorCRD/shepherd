import React from 'react';
import { withRouter } from 'react-router-dom';
import config from 'config';
import routerPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import { userShape } from 'components/user-sidebar';
import EnterButton from 'components/enter-button';
import { Redirect } from 'react-router';

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

  state = {
    receivedClick: false,
  };

  enterClickHandler = () => {
    const { history, location, user } = this.props;
    if (!user && window && history && location) {
      const { clientId } = config;
      history.push(location.path);
      window.location.replace(config.githubOauthUrl(clientId));
      return;
    }

    this.setState(() => ({
      receivedClick: true,
    }));
  };

  render() {
    const { user } = this.props;
    const { receivedClick } = this.state;
    return receivedClick ? (
      <Redirect to="/app/repositories" />
    ) : (
      <EnterButton user={user} enterClickHandler={this.enterClickHandler} />
    );
  }
}

function mapStateToProps({ user }) {
  return {
    user,
  };
}

export default connect(mapStateToProps, null)(withRouter(EnterButtonContainer));
