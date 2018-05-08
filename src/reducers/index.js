import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import languageStore from './language';
import authStore from './auth';
import userStore from './user';

const rootReducer = combineReducers({
  form,
  languageStore,
  authStore,
  userStore
});

export default rootReducer;
