export const SAVE_USER = 'SAVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function saveUser(user) {
  return {
    type: SAVE_USER,
    user,
  };
}

export function logout() {
  return {
    type: LOGOUT_USER,
  };
}
