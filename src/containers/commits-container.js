import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ShepherdApi from 'api/shepherd-api';
import Commit from 'components/commit';

function firstAndLastName(fullname) {
  const names = fullname.split(' ');
  let firstAndLastNames;
  if (names.length !== 0) {
    [firstAndLastNames] = names;
  }
  if (names.length >= 2) {
    firstAndLastNames = `${names[0]} ${names[names.length - 1]}`;
  }
  return firstAndLastNames;
}

class CommitsContainer extends React.Component {
  static propTypes = {
    userId: PropTypes.number.isRequired,
  };

  state = {
    commits: null,
  };

  componentDidMount() {
    const { userId } = this.props;
    ShepherdApi.getAllCommits(userId).then(commits =>
      this.setState(() => ({
        commits,
      })));
  }

  render() {
    const { commits } = this.state;
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(commits, null, '   '));
    return commits && commits.length > 0 ? (
      <ul>
        {commits.map(({ commit }) => (
          <Commit
            author={firstAndLastName(commit.author.name)}
            message={commit.message}
            link={commit.html_url}
            date={commit.committer.date}
            key={commit.sha}
          />
        ))}
      </ul>
    ) : (
      ''
    );
  }
}

function mapStateToProps({ user }) {
  return {
    userId: user.id,
  };
}

export default connect(mapStateToProps, null)(CommitsContainer);
