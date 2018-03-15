import React from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { userShape } from 'components/user-sidebar';
import DropdownContainer from 'containers/dropdown-container';
import ShepherdApi from 'api/shepherd-api';
import { saveRepos, saveCommits } from 'actions/repo-actions';
import PropTypes from 'prop-types';

const InputWrapper = styled(Flex)`
  margin-left: 40px;
  border-radius: 3px;
  background-color: white;
  padding: 10px;
  border: rgb(228, 228, 228) solid 1px;

  font-family: ${props => props.theme.fonts.secondary.fontFamily};
  font-size: 13px;
  color: ${props => props.theme.fonts.primary.color};
  letter-spacing: 0.5px;
`;

const Input = styled.input`
  display: block;
  background: #fff;
  padding: 10px 10px 10px 0px;
  border: 0;
  outline: none;
  width: 100%;

  font-family: ${props => props.theme.fonts.secondary.fontFamily};
  font-size: 13px;
  color: ${props => props.theme.fonts.primary.color};
  letter-spacing: 0.5px;
`;

const Span = styled.span`
  display: block;
`;

const SearchResultItem = styled(Flex)`
  font-family: ${props => props.theme.fonts.secondary.fontFamily};
  font-size: 13px;
  color: ${props => props.theme.fonts.primary.color};
  letter-spacing: 0.5px;

  margin-bottom: 10px;
  min-width: 350px;
`;

const AddRepoButton = styled.button`
  background-color: ${props => props.theme.colors.detail};
  border-radius: 3px;
  padding: 10px;
  color: white;
  margin-left: 120px;
`;

class RepoInputContainer extends React.Component {
  static propTypes = {
    user: userShape.isRequired,
    saveSelectedRepo: PropTypes.func.isRequired,
    saveCommitsList: PropTypes.func.isRequired,
  };

  state = {
    results: null,
  };

  onChangeHandler = debounce((event, showDropDown) => {
    const { user: { id } } = this.props;
    const search = event.target.value || '*'; // evitar match quando string vazia
    ShepherdApi.search(id, search).then((resul) => {
      this.setState(() => ({
        results: resul.items,
      }));
      if (resul.total_count > 0) {
        showDropDown(true);
      } else {
        showDropDown(false);
      }
    });
  }, 300);

  addRepoHandler = (repoId) => {
    const { user, saveSelectedRepo, saveCommitsList } = this.props;

    ShepherdApi.addRepo(user.id, repoId).then(() => {
      ShepherdApi.getMonitoredRepos(user.id).then(({ monitored_repos: monitoredRepos }) => {
        saveSelectedRepo(monitoredRepos);
      });
      ShepherdApi.getAllCommits(user.id).then((commits) => {
        saveCommitsList(commits);
      });
    });
  };

  renderAncor = () => {
    const { user } = this.props;

    return (
      <InputWrapper alignCenter style={{ cursor: 'none' }}>
        <Span>{`${user.login}/`}</Span>
        <Input placeholder="Search and add new repositories" />
      </InputWrapper>
    );
  };

  render() {
    const { results } = this.state;

    return (
      <DropdownContainer
        Ancor={this.renderAncor}
        onClick={() => {}}
        onChange={this.onChangeHandler}
      >
        {results &&
          results.map(repo => (
            <SearchResultItem justifyStart alignCenter>
              <span>{repo.repoName}</span>
              <Flex full justifyEnd alignCenter>
                <AddRepoButton onClick={() => this.addRepoHandler(repo.id)}>
                  + Add repo
                </AddRepoButton>
              </Flex>
            </SearchResultItem>
          ))}
      </DropdownContainer>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    user,
  };
}

export default connect(mapStateToProps, {
  saveSelectedRepo: saveRepos,
  saveCommitsList: saveCommits,
})(RepoInputContainer);
