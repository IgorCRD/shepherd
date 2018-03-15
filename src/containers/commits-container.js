import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ShepherdApi from 'api/shepherd-api';
import CommitList, { commitShape } from 'components/commit-list';
import { saveCommits, filter } from 'actions/repo-actions';

class CommitsContainer extends React.Component {
  static propTypes = {
    userId: PropTypes.number.isRequired,
    commits: PropTypes.arrayOf(commitShape).isRequired,
    filterRepo: PropTypes.string.isRequired,
    saveCommitList: PropTypes.func.isRequired,
    selectRepo: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { userId, saveCommitList } = this.props;
    ShepherdApi.getAllCommits(userId).then((commits) => {
      const orderedCommits = [...commits];
      orderedCommits.sort((a, b) => {
        if (new Date(a.commit.committer.date) < new Date(b.commit.committer.date)) return 1;
        if (new Date(a.commit.committer.date) > new Date(b.commit.committer.date)) return -1;
        return 0;
      });
      saveCommitList(commits);
    });
  }

  render() {
    const { commits, filterRepo, selectRepo } = this.props;
    const filteredCommits =
      commits &&
      commits.filter(commit => filterRepo === 'All' || commit.repoFullName === filterRepo);
    return filteredCommits && filteredCommits.length > 0 ? (
      <CommitList commits={filteredCommits} selectRepo={selectRepo} />
    ) : (
      ''
    );
  }
}

function mapStateToProps({ user, repo }) {
  return {
    userId: user.id,
    commits: repo.commits,
    filterRepo: repo.filter,
  };
}

export default connect(mapStateToProps, { saveCommitList: saveCommits, selectRepo: filter })(CommitsContainer);
