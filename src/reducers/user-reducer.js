import { SAVE_USER, LOGOUT_USER } from 'actions/user-actions';

const initialState = null;

export default function user(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER:
      return { ...state, ...action.user };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
}
