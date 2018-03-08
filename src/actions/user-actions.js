export const SAVE_USER = 'SAVE_USER';

export function saveUser(user) {
  return {
    type: SAVE_USER,
    user,
  };
}
