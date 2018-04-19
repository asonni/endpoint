import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authStore from './auth';
import userStore from './user';

const rootReducer = combineReducers({
  form,
  authStore,
  userStore
});

export default rootReducer;
