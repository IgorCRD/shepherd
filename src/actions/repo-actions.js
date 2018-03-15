export const FILTER = 'FILTER';
export const SAVE_LIST = 'SAVE_LIST';
export const REMOVE_REPO = 'REMOVE_REPO';
export const SAVE_COMMITS = 'SAVE_COMMITS';

export function filter(repoName) {
  return {
    type: FILTER,
    repo: repoName,
  };
}

export function saveRepos(monitoredRepos) {
  return {
    type: SAVE_LIST,
    repos: monitoredRepos,
  };
}

export function remove(repoName) {
  return {
    type: REMOVE_REPO,
    repo: repoName,
  };
}

export function saveCommits(commits) {
  return {
    type: SAVE_COMMITS,
    commits,
  };
}
