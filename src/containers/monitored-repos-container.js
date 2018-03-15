import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShepherdApi from 'api/shepherd-api';
import RepoList, { repoShape } from 'components/repo-list';
import { filter, saveRepos, remove } from 'actions/repo-actions';

class MonitoredReposContainer extends React.Component {
  static propTypes = {
    userId: PropTypes.number.isRequired,
    selected: PropTypes.string.isRequired,
    repos: repoShape.isRequired,
    saveRepoList: PropTypes.func.isRequired,
    selectHander: PropTypes.func.isRequired,
    removeRepo: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { userId, saveRepoList } = this.props;
    ShepherdApi.getMonitoredRepos(userId).then(({ monitored_repos: monitoredRepos }) => {
      saveRepoList(monitoredRepos);
    });
  }

  removeRepoHandler = (repoFullName) => {
    const { removeRepo, repos, userId } = this.props;
    const repoToBeRemoved = repos.filter(repo => repo.full_name === repoFullName)[0];
    ShepherdApi.removeRepo(userId, repoToBeRemoved.id).then(() => {
      removeRepo(repoFullName);
    });
  };

  render() {
    const { selected, repos, selectHander } = this.props;
    return (
      repos && (
        <RepoList
          repos={repos}
          selected={selected}
          selectHander={selectHander}
          removeRepo={this.removeRepoHandler}
        />
      )
    );
  }
}

function mapStateToProps({ user, repo }) {
  return {
    selected: repo.filter,
    userId: user.id,
    repos: repo.monitored,
  };
}

export default connect(mapStateToProps, {
  selectHander: filter,
  saveRepoList: saveRepos,
  removeRepo: remove,
})(MonitoredReposContainer);
