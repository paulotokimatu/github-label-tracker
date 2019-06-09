import { combineReducers } from 'redux';
import issueReducer from './issue';
import labelReducer from './label';
import repoReducer from './repo';
import tagReducer from './tag';

export default combineReducers({
  issueReducer,
  labelReducer,
  repoReducer,
  tagReducer,
});
