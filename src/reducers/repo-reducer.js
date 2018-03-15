import { FILTER, SAVE_LIST, REMOVE_REPO, SAVE_COMMITS } from 'actions/repo-actions';
import { LOGOUT_USER } from 'actions/user-actions';

const initialState = {
  monitored: null,
  filter: 'All',
  commits: null,
};

function unique(items, key) {
  const u = {};
  const a = [];
  for (let i = 0, l = items.length; i < l; i += 1) {
    // eslint-disable-next-line no-prototype-builtins
    if (!u.hasOwnProperty(items[i][key])) {
      a.push(items[i]);
      u[items[i][key]] = 1;
    }
  }
  return a;
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case FILTER:
      return { ...state, filter: action.repo };
    case SAVE_LIST:
      return {
        ...state,
        monitored: unique([...(state.monitored || []), ...action.repos], 'full_name'),
      };
    case REMOVE_REPO:
      return {
        ...state,
        monitored: [...(state.monitored || []).filter(repo => repo.full_name !== action.repo)],
        commits: [...(state.commits || []).filter(commit => commit.repoFullName !== action.repo)],
      };
    case SAVE_COMMITS:
      return {
        ...state,
        commits: unique([...(state.commits || []), ...action.commits], 'sha'),
      };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
}
