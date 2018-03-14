import { FILTER, SAVE_LIST, REMOVE_REPO } from 'actions/repo-actions';
import { LOGOUT_USER } from 'actions/user-actions';

const initialState = {
  monitored: null,
  filterBy: 'All',
};

function unique(repos) {
  const u = {};
  const a = [];
  for (let i = 0, l = repos.length; i < l; i += 1) {
    // eslint-disable-next-line no-prototype-builtins
    if (!u.hasOwnProperty(repos[i].full_name)) {
      a.push(repos[i]);
      u[repos[i].full_name] = 1;
    }
  }
  return a;
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case FILTER:
      return { ...state, filterBy: action.repo };
    case SAVE_LIST:
      return { ...state, monitored: unique([...(state.monitored || []), ...action.repos]) };
    case REMOVE_REPO:
      return {
        ...state,
        monitored: [...(state.monitored || [])].filter(repo => repo !== action.repo),
      };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
}
