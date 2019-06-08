import { combineReducers } from 'redux';
import repoReducer from './repo';
import tagReducer from './tag';

export default combineReducers({
  repoReducer,
  tagReducer,
});
