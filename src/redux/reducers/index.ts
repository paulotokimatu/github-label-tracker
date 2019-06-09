import { combineReducers } from 'redux';
import issueReducer from './issueReducer';
import labelReducer from './labelReducer';
import repoReducer from './repoReducer';

export default combineReducers({
  issueReducer,
  labelReducer,
  repoReducer,
});
