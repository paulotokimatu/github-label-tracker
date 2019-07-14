import { combineReducers } from 'redux';

import Issue from 'core/models/Issue';
import {
  DELETE_ISSUES,
  GET_ISSUES,
  ISSUE_REQUEST_END,
  ISSUE_REQUEST_START,
} from '../actions/issueActions';

const initialState: {
  data: { [name: string]: Issue[] },
  isFetching: boolean,
} = {
  data: {},
  isFetching: false,
};

const issueIsFetchingReducer = (state = initialState.isFetching, action: any) => {
  switch (action.type) {
    case ISSUE_REQUEST_START:
      return true;
    case ISSUE_REQUEST_END:
      return false;
    default: {
      return state;
    }
  }
};

const issueDataReducer = (state = initialState.data, action: any) => {
  switch (action.type) {
    case GET_ISSUES: {
      return {
        ...state,
        [action.payload.repoName]: action.payload.issues,
      };
    }
    case DELETE_ISSUES: {
      const newState = { ...state };
      delete newState[action.payload.repoName];
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  data: issueDataReducer,
  isFetching: issueIsFetchingReducer,
});
