import axios from 'axios';
import { reset } from 'redux-form';

import setAuthToken from '../../utils/setAuthToken';
import { API_URL, API_VER, TOKEN_TYPE } from '../baseUrl';
import { AUTH_USER, AUTH_MESSAGE, UNAUTH_USER } from './types';

export const loginUser = (values, cb) => async dispatch => {
  try {
    const response = await axios.post(
      `${API_URL}/${API_VER}/users/login`,
      values
    );
    const { id_token } = response.data;
    localStorage.setItem('ad_token', id_token);
    setAuthToken(`${TOKEN_TYPE} ${id_token}`);
    dispatch({ type: AUTH_USER });
    cb(true);
  } catch ({ response }) {
    dispatch(authMessage(response.data.code));
    dispatch(reset('loginForm'));
    cb(false);
  }
};

export const loginUserByFacebook = (facebookToken, cb) => async dispatch => {
  try {
    const response = await axios.post(`${API_URL}/${API_VER}/users`, {
      facebookToken
    });
    const { id_token } = response.data;
    localStorage.setItem('ad_token', id_token);
    setAuthToken(`${TOKEN_TYPE} ${id_token}`);
    dispatch({ type: AUTH_USER });
    cb(true);
  } catch ({ response }) {
    dispatch(authMessage(response.data.code));
    dispatch(reset('loginForm'));
    cb(false);
  }
};

export const loginUserByGoogle = (googleToken, cb) => async dispatch => {
  try {
    const response = await axios.post(`${API_URL}/${API_VER}/users`, {
      googleToken
    });
    const { id_token } = response.data;
    localStorage.setItem('ad_token', id_token);
    setAuthToken(`${TOKEN_TYPE} ${id_token}`);
    dispatch({ type: AUTH_USER });
    cb(true);
  } catch ({ response }) {
    dispatch(authMessage(response.data.code));
    dispatch(reset('loginForm'));
    cb(false);
  }
};

export const registerUser = (values, cb) => async dispatch => {
  try {
    const response = await axios.post(`${API_URL}/${API_VER}/users`, values);
    const { id_token } = response.data;
    localStorage.setItem('ad_token', id_token);
    setAuthToken(`${TOKEN_TYPE} ${id_token}`);
    dispatch({ type: AUTH_USER });
    cb(true);
  } catch ({ response }) {
    dispatch(authMessage(response.data.code));
    dispatch(reset('registerForm'));
    cb(false);
  }
};

export const resetPassword = ({ newPassword, hash }, cb) => async dispatch => {
  try {
    const response = await axios.put(
      `${API_URL}/verifications/passreset`,
      { password: newPassword, hash },
      {
        headers: {
          'Content-Language': localStorage.getItem('lng') || 'en'
        }
      }
    );
    dispatch(authMessage(response.data.code));
    cb(true);
  } catch ({ response }) {
    dispatch(authMessage(response.data.code));
    cb(false);
  }
};

export const logoutUser = () => {
  setAuthToken('');
  localStorage.removeItem('ad_token');
  return { type: UNAUTH_USER };
};

export const authMessage = message => ({
  type: AUTH_MESSAGE,
  payload: message
});
