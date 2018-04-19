import axios from 'axios';
import { reset } from 'redux-form';
import { API_URL, API_VER } from '../baseUrl';
import { AUTH_USER, AUTH_MESSAGE, UNAUTH_USER } from './types';

export const loginUser = (values, callback) => async dispatch => {
  try {
    const response = await axios.post(
      `${API_URL}/${API_VER}/users/login`,
      values
    );
    const { id_token } = response.data;
    localStorage.setItem('ad_token', id_token);
    dispatch({ type: AUTH_USER });
    callback(true);
  } catch ({ response }) {
    dispatch(authMessage(response.data.code));
    dispatch(reset('loginForm'));
    callback(false);
  }
};

export const loginUserByFacebook = (
  facebookToken,
  callback
) => async dispatch => {
  try {
    const response = await axios.post(`${API_URL}/${API_VER}/users`, {
      facebookToken
    });
    const { id_token } = response.data;
    localStorage.setItem('ad_token', id_token);
    dispatch({ type: AUTH_USER });
    callback(true);
  } catch ({ response }) {
    dispatch(authMessage(response.data.code));
    dispatch(reset('loginForm'));
    callback(false);
  }
};

export const loginUserByGoogle = (googleToken, callback) => async dispatch => {
  try {
    const response = await axios.post(`${API_URL}/${API_VER}/users`, {
      googleToken
    });
    const { id_token } = response.data;
    localStorage.setItem('ad_token', id_token);
    dispatch({ type: AUTH_USER });
    callback(true);
  } catch ({ response }) {
    dispatch(authMessage(response.data.code));
    dispatch(reset('loginForm'));
    callback(false);
  }
};

export const registerUser = (values, callback) => async dispatch => {
  try {
    const response = await axios.post(`${API_URL}/${API_VER}/users`, values);
    const { id_token } = response.data;
    localStorage.setItem('ad_token', id_token);
    dispatch({ type: AUTH_USER });
    callback(true);
  } catch ({ response }) {
    dispatch(authMessage(response.data.code));
    dispatch(reset('registerForm'));
    callback(false);
  }
};

export const logoutUser = () => {
  localStorage.removeItem('ad_token');
  return { type: UNAUTH_USER };
};

export const authMessage = message => ({
  type: AUTH_MESSAGE,
  payload: message
});
