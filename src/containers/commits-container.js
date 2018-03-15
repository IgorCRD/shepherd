import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ShepherdApi from 'api/shepherd-api';
import CommitList, { commitShape } from 'components/commit-list';
import { saveCommits, filter } from 'actions/repo-actions';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

const NothingToShow = styled(Flex)`
  background: white;
  margin-left: 40px;
  border: grey solid 1px;
  margin-top: 13px;
  padding: 15px;
  border-radius: 3px;
`;

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
      saveCommitList(commits);
    });
  }

  render() {
    const { commits, filterRepo, selectRepo } = this.props;
    const filteredCommits =
      commits &&
      commits.filter(commit => filterRepo === 'All' || commit.repoFullName === filterRepo);

    const orderedCommits = [...(filteredCommits || [])];
    orderedCommits.sort((a, b) => {
      if (new Date(a.commit.committer.date) < new Date(b.commit.committer.date)) return 1;
      if (new Date(a.commit.committer.date) > new Date(b.commit.committer.date)) return -1;
      return 0;
    });

    return orderedCommits && orderedCommits.length > 0 ? (
      <CommitList commits={orderedCommits} selectRepo={selectRepo} />
    ) : (
      <NothingToShow>
        Sorry! Nothing to see here! You can start adding repos using the field above.
      </NothingToShow>
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
