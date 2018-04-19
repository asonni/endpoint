import {
  FETCH_CURRENT_USER_PENDING,
  FETCH_CURRENT_USER_FULFILLED,
  FETCH_CURRENT_USER_REJECTED,
  RESEND_ACTIVATION_EMAIL_PENDING,
  RESEND_ACTIVATION_EMAIL_FULFILLED,
  RESEND_ACTIVATION_EMAIL_REJECTED
} from '../actions/user/types';

const initState = {
  currentUser: {},
  currentUserError: '',
  resendEmailError: '',
  resendEmailStatus: '',
  resendEmailIsSending: false,
  currentUserIsFetching: false
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_CURRENT_USER_PENDING:
      return { ...state, currentUserIsFetching: true, currentUserError: '' };

    case FETCH_CURRENT_USER_FULFILLED:
      return {
        ...state,
        currentUser: payload.data.me,
        currentUserIsFetching: false,
        currentUserError: ''
      };

    case FETCH_CURRENT_USER_REJECTED:
      return {
        ...state,
        currentUserIsFetching: false,
        currentUserError: payload
      };

    case RESEND_ACTIVATION_EMAIL_PENDING:
      return { ...state, resendEmailIsSending: true, resendEmailError: '' };

    case RESEND_ACTIVATION_EMAIL_FULFILLED:
      return {
        ...state,
        resendEmailStatus: payload.data,
        resendEmailIsSending: false,
        resendEmailError: ''
      };

    case RESEND_ACTIVATION_EMAIL_REJECTED:
      return {
        ...state,
        resendEmailIsSending: false,
        resendEmailError: payload.data.code
      };

    default:
      return state;
  }
};
