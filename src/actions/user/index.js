import axios from 'axios';
import { API_URL, API_VER, TOKEN_TYPE } from '../baseUrl';
import {
  FETCH_CURRENT_USER_PENDING,
  FETCH_CURRENT_USER_FULFILLED,
  FETCH_CURRENT_USER_REJECTED,
  RESEND_ACTIVATION_EMAIL_PENDING,
  RESEND_ACTIVATION_EMAIL_FULFILLED,
  RESEND_ACTIVATION_EMAIL_REJECTED
} from './types';

export const fetchCurrentUser = () => async dispatch => {
  dispatch({ type: FETCH_CURRENT_USER_PENDING });
  try {
    const response = await axios.get(`${API_URL}/${API_VER}/users/me`, {
      headers: {
        Authorization: `${TOKEN_TYPE} ${localStorage.getItem('ad_token')}`
      }
    });
    dispatch({ type: FETCH_CURRENT_USER_FULFILLED, payload: response });
  } catch ({ response }) {
    dispatch({ type: FETCH_CURRENT_USER_REJECTED, payload: response });
  }
};

export const resendActivationEmail = email => async dispatch => {
  dispatch({ type: RESEND_ACTIVATION_EMAIL_PENDING });
  try {
    const response = await axios.post(
      `${API_URL}/verifications/email/resend`,
      { email },
      {
        headers: {
          Authorization: `${TOKEN_TYPE} ${localStorage.getItem('ad_token')}`
        }
      }
    );
    dispatch({ type: RESEND_ACTIVATION_EMAIL_FULFILLED, payload: response });
  } catch ({ response }) {
    dispatch({ type: RESEND_ACTIVATION_EMAIL_REJECTED, payload: response });
  }
};
