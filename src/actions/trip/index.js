import axios from 'axios';

import { API_URL, API_VER } from '../baseUrl';
import {
  NEW_TRIP_PENDING,
  NEW_TRIP_FULFILLED,
  NEW_TRIP_REJECTED
} from './types';

export const newTrip = values => async dispatch => {
  dispatch({ type: NEW_TRIP_PENDING });
  try {
    const response = await axios.post(`${API_URL}/${API_VER}/trips`, values);
    dispatch({ type: NEW_TRIP_FULFILLED, payload: response });
  } catch ({ response }) {
    dispatch({ type: NEW_TRIP_REJECTED, payload: response });
  }
};
