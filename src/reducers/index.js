import { combineReducers } from 'redux';
import user from 'reducers/user-reducer';
import repo from 'reducers/repo-reducer';

export default combineReducers({
  user,
  repo,
});
