import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import issueReducer from './issueReducer';
import labelReducer from './labelReducer';
import repoReducer from './repoReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  alert: alertReducer,
  issues: issueReducer,
  labels: labelReducer,
  repos: repoReducer,
  ui: uiReducer,
});
