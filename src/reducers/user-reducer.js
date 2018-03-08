import { SAVE_USER } from 'actions/user-actions';

export default function user(state = {}, action) {
  switch (action.type) {
    case SAVE_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
}
