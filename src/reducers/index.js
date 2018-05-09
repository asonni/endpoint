import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authStore from './auth';
import userStore from './user';
import tripStore from './trip';

const rootReducer = combineReducers({
  form,
  authStore,
  userStore,
  tripStore
});

export default rootReducer;
