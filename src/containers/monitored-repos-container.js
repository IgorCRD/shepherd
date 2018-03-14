import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShepherdApi from 'api/shepherd-api';
import RepoList from 'components/repo-list';

class MonitoredReposContainer extends React.Component {
  static propTypes = {
    userId: PropTypes.number.isRequired,
  };

  state = {
    repos: null,
  };

  componentDidMount() {
    const { userId } = this.props;
    ShepherdApi.getMonitoredRepos(userId).then(({ monitored_repos: monitoredRepos }) => {
      this.setState(() => ({
        repos: monitoredRepos,
      }));
    });
  }

  render() {
    const { repos } = this.state;
    return repos && <RepoList repos={repos} />;
  }
}

function mapStateToProps({ user }) {
  return {
    userId: user.id,
  };
}

export default connect(mapStateToProps, null)(MonitoredReposContainer);
