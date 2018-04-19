import { AUTH_USER, UNAUTH_USER, AUTH_MESSAGE } from '../actions/auth/types';

export default (
  state = { authMessage: '', authenticated: false },
  { type, payload }
) => {
  switch (type) {
    case AUTH_USER:
      return { ...state, authMessage: '', authenticated: true };

    case UNAUTH_USER:
      return { ...state, authMessage: '', authenticated: false };

    case AUTH_MESSAGE:
      return { ...state, authMessage: payload };

    default:
      return state;
  }
};
