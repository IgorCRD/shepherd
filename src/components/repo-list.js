import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RepoItem from 'components/repo-item';

const RepoListTitle = styled.span`
  color: rgba(50, 54, 72, 0.4);
  font-family: ${props => props.theme.fonts.secondary.fontFamily};
  font-size: 13px;
  font-weight: bolder;
  letter-spacing: 0.5px;
`;

const UlWrap = styled.ul`
  list-style: none;
  padding: 0;
`;

const RepoList = ({ repos, selected, selectHander }) => {
  const repoList = [...repos];
  repoList.unshift({ full_name: 'All', name: 'All' });
  return (
    <div>
      <RepoListTitle>REPOS</RepoListTitle>
      <UlWrap>
        {repoList.map(repo => (
          <RepoItem
            selected={selected}
            name={repo.name}
            fullName={repo.full_name}
            selectHander={selectHander}
          />
        ))}
      </UlWrap>
      <pre>{JSON.stringify(repoList, null, '  ')}</pre>
    </div>
  );
};

export const repoShape = PropTypes.shape({
  _id: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  full_name: PropTypes.string,
  private: PropTypes.bool,
  html_url: PropTypes.string,
  description: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
  pushed_at: PropTypes.string,
  homepage: PropTypes.string,
  language: PropTypes.string,
  ownerId: PropTypes.number,
  ownerName: PropTypes.string,
  __v: PropTypes.number,
});

RepoList.propTypes = {
  selected: PropTypes.string.isRequired,
  selectHander: PropTypes.func.isRequired,
  repos: PropTypes.arrayOf(repoShape).isRequired,
};

export default RepoList;
