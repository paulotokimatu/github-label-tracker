import { combineReducers } from 'redux';

import {
  LABEL_REQUEST_END,
  LABEL_REQUEST_START,
  SET_LABELS,
} from '../actions/labelActions';

const initialState = {
  data: {},
  isFetching: false,
};

const labelIsFetchingReducer = (state = initialState.isFetching, action: any) => {
  switch (action.type) {
    case LABEL_REQUEST_START:
      return true;
    case LABEL_REQUEST_END:
      return false;
    default: {
      return state;
    }
  }
};

const labelDataReducer = (state = initialState.data, action: any) => {
  switch (action.type) {
    case SET_LABELS: {
      return {
        ...state,
        [action.payload.repoName]: action.payload.labels,
      };
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  data: labelDataReducer,
  isFetching: labelIsFetchingReducer,
});
