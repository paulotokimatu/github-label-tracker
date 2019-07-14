import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import issueReducer from './issueReducer';
import labelReducer from './labelReducer';
import repoReducer from './repoReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  alert: alertReducer,
  issues: issueReducer,
  labels: labelReducer,
  repos: repoReducer,
  ui: uiReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
