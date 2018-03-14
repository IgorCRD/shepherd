import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ShepherdApi from 'api/shepherd-api';
import CommitList from 'components/commit-list';

class CommitsContainer extends React.Component {
  static propTypes = {
    userId: PropTypes.number.isRequired,
  };

  state = {
    commits: null,
  };

  componentDidMount() {
    const { userId } = this.props;
    ShepherdApi.getAllCommits(userId).then((commits) => {
      const orderedCommits = [...commits];
      orderedCommits.sort((a, b) => {
        if (new Date(a.commit.committer.date) < new Date(b.commit.committer.date)) return 1;
        if (new Date(a.commit.committer.date) > new Date(b.commit.committer.date)) return -1;
        return 0;
      });
      this.setState(() => ({
        commits: orderedCommits,
      }));
    });
  }

  render() {
    const { commits } = this.state;
    return commits && commits.length > 0 ? <CommitList commits={commits} /> : '';
  }
}

function mapStateToProps({ user }) {
  return {
    userId: user.id,
  };
}

export default connect(mapStateToProps, null)(CommitsContainer);
