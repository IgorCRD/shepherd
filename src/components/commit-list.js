import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Commit from 'components/commit';

const UlWrapper = styled.ul`
  border-radius: 3px;
  flex-grow: 0.35;
  max-width: 50%;
`;

const CommitList = ({ commits }) => (
  <UlWrapper>
    {commits.map(({ commit, repoFullName, html_url: htmlUrl }, index) => (
      <Commit
        author={commit.author.login}
        message={commit.message}
        link={htmlUrl}
        date={commit.committer.date}
        repoFullName={repoFullName}
        key={commit.sha}
        index={index}
        length={commits.length}
      />
    ))}
  </UlWrapper>
);

CommitList.propTypes = {
  commits: PropTypes.arrayOf(PropTypes.shape({
    sha: PropTypes.string,
    repoId: PropTypes.string,
    repoFullName: PropTypes.string,
    html_url: PropTypes.string,
    commit: {
      url: PropTypes.string,
      author: {
        name: PropTypes.string,
        email: PropTypes.string,
        date: PropTypes.string,
      },
      committer: {
        name: PropTypes.string,
        email: PropTypes.string,
        date: PropTypes.string,
      },
      message: PropTypes.string,
    },
  })).isRequired,
};

export default CommitList;
