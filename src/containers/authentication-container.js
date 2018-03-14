import React from 'react';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import queryStringParser from 'query-string';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ShepherdApi from 'api/shepherd-api';
import { saveUser } from 'actions/user-actions';

class AuthenticationContainer extends React.Component {
  static propTypes = {
    location: ReactRouterPropTypes.location,
    save: PropTypes.func,
    logged: PropTypes.bool,
  };

  static defaultProps = {
    location: null,
    save: null,
    logged: null,
  };

  state = {
    noCode: false,
    error: false,
  };

  componentDidMount() {
    const { logged, location: { search }, save } = this.props;

    if (!logged && search) {
      const queryString = queryStringParser.parse(search);
      ShepherdApi.authenticateAndFetchUser(queryString.code).then((userResponse) => {
        if (userResponse.login) save(userResponse);
        else this.setState(() => ({ error: false }));
      });
    } else if (!search) {
      this.setState(() => ({ noCode: true }));
    }
  }

  render() {
    const { noCode, error } = this.state;
    const { logged } = this.props;

    if (logged) {
      return <Redirect to="/app/repositories" />;
    } else if (noCode) {
      return <Redirect to="/" />;
    } else if (error) {
      return <h1>Flalha na autenticação</h1>;
    }
    return null;
  }
}

function mapStateToProps({ user }) {
  return {
    logged: !!user,
  };
}

export default connect(mapStateToProps, { save: saveUser })(withRouter(AuthenticationContainer));
