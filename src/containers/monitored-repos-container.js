import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShepherdApi from 'api/shepherd-api';
import RepoList, { repoShape } from 'components/repo-list';
import { filter, saveRepos } from 'actions/repo-actions';

class MonitoredReposContainer extends React.Component {
  static propTypes = {
    userId: PropTypes.number.isRequired,
    selected: PropTypes.string.isRequired,
    repos: repoShape.isRequired,
    saveRepoList: PropTypes.func.isRequired,
    selectHander: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { userId, saveRepoList } = this.props;
    ShepherdApi.getMonitoredRepos(userId).then(({ monitored_repos: monitoredRepos }) => {
      saveRepoList(monitoredRepos);
    });
  }

  render() {
    const { selected, repos, selectHander } = this.props;
    return repos && <RepoList repos={repos} selected={selected} selectHander={selectHander} />;
  }
}

function mapStateToProps({ user, repo }) {
  return {
    selected: repo.filterBy,
    userId: user.id,
    repos: repo.monitored,
  };
}

export default connect(mapStateToProps, { selectHander: filter, saveRepoList: saveRepos })(MonitoredReposContainer);
