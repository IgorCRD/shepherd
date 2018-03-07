import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import queryStringParser from 'query-string';

class AuthenticationContainer extends React.Component {
  static propTypes = {
    location: ReactRouterPropTypes.location,
  };

  static defaultProps = {
    location: null,
  };

  state = { user: null };

  componentDidMount() {
    if (this.props.location.search) {
      fetch('http://localhost:3001/api/authentication', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(queryStringParser.parse(this.props.location.search)),
      })
        .then(resp => resp.json())
        .then((user) => {
          this.setState(() => ({ user }));
        });
    }
  }

  render() {
    return <pre>{JSON.stringify(this.state.user)}</pre>;
  }
}

export default withRouter(AuthenticationContainer);
