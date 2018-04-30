import {
  FETCH_CURRENT_USER_PENDING,
  FETCH_CURRENT_USER_FULFILLED,
  FETCH_CURRENT_USER_REJECTED,
  RESEND_ACTIVATION_EMAIL_PENDING,
  RESEND_ACTIVATION_EMAIL_FULFILLED,
  RESEND_ACTIVATION_EMAIL_REJECTED,
  FORGET_PASSWORD_PENDING,
  FORGET_PASSWORD_FULFILLED,
  FORGET_PASSWORD_REJECTED,
  RESET_PASSWORD_PENDING,
  RESET_PASSWORD_FULFILLED,
  RESET_PASSWORD_REJECTED
} from '../actions/user/types';

const initState = {
  currentUser: {},
  currentUserError: '',
  resendEmailError: '',
  resendEmailStatus: '',
  resendingEmail: false,
  resetPasswordError: '',
  forgotPasswordError: '',
  resetPasswordStatus: '',
  forgotPasswordStatus: '',
  currentUserIsFetching: false,
  resetPasswordIsLoading: false,
  forgotPasswordIsLoading: false
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_CURRENT_USER_PENDING:
      return {
        ...state,
        currentUserIsFetching: true,
        currentUserError: ''
      };

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
      return {
        ...state,
        resendingEmail: true,
        resendEmailError: ''
      };

    case RESEND_ACTIVATION_EMAIL_FULFILLED:
      return {
        ...state,
        resendEmailStatus: payload.data,
        resendingEmail: false,
        resendEmailError: ''
      };

    case RESEND_ACTIVATION_EMAIL_REJECTED:
      return {
        ...state,
        resendingEmail: false,
        resendEmailError: payload.data.code
      };

    case FORGET_PASSWORD_PENDING:
      return {
        ...state,
        forgotPasswordIsLoading: true,
        forgotPasswordError: ''
      };

    case FORGET_PASSWORD_FULFILLED:
      return {
        ...state,
        forgotPasswordStatus: payload.data,
        forgotPasswordIsLoading: false,
        forgotPasswordError: ''
      };

    case FORGET_PASSWORD_REJECTED:
      return {
        ...state,
        forgotPasswordIsLoading: false,
        forgotPasswordError: payload.data.code
      };

    case RESET_PASSWORD_PENDING:
      return {
        ...state,
        resetPasswordIsLoading: true,
        resetPasswordError: ''
      };

    case RESET_PASSWORD_FULFILLED:
      return {
        ...state,
        resetPasswordStatus: payload.data,
        resetPasswordIsLoading: false,
        resetPasswordError: ''
      };

    case RESET_PASSWORD_REJECTED:
      return {
        ...state,
        resetPasswordIsLoading: false,
        resetPasswordError: payload.data.code
      };

    default:
      return state;
  }
};
