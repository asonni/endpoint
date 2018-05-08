import { FETCH_LANGUAGE } from './types';

export const fetchLanguage = lng => dispatch => {
  dispatch({ type: FETCH_LANGUAGE, payload: lng });
};
