import { FETCH_LANGUAGE } from '../actions/language/types';

export default (
  state = { lng: localStorage.getItem('AddabbaLng') },
  { type, payload }
) => {
  switch (type) {
    case FETCH_LANGUAGE:
      return { ...state, lng: payload };

    default:
      return state;
  }
};
