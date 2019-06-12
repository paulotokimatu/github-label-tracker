import { combineReducers } from 'redux';
import issueReducer from './issueReducer';
import labelReducer from './labelReducer';
import repoReducer from './repoReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  issues: issueReducer,
  labels: labelReducer,
  repos: repoReducer,
  ui: uiReducer,
});
