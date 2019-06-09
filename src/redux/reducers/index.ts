import { combineReducers } from 'redux';
import issueReducer from './issue';
import labelReducer from './label';
import repoReducer from './repo';

export default combineReducers({
  issueReducer,
  labelReducer,
  repoReducer,
});
