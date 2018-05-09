import {
  NEW_TRIP_PENDING,
  NEW_TRIP_FULFILLED,
  NEW_TRIP_REJECTED
} from '../actions/trip/types';

const initState = {
  trips: [],
  errors: {},
  loading: false
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case NEW_TRIP_PENDING:
      return { ...state, loading: true, errors: {} };

    case NEW_TRIP_FULFILLED:
      console.log(payload);
      return {
        ...state,
        trips: [...state.trips, payload.data.trip],
        loading: false,
        errors: {}
      };

    case NEW_TRIP_REJECTED:
      return {
        ...state,
        loading: false,
        errors: { message: payload.data.error, status: payload.status }
      };

    default:
      return state;
  }
};
