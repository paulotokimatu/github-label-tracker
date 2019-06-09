import {
  GET_ISSUES,
} from '../actions/issue';

const initialState = {
  isFetching: false,
  repos: {},
};

const issueReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ISSUES: {
      const newState: any = { ...state };
      newState.repos[action.payload.repoName] = action.payload.issues;

      return newState;
    }
    default: {
      return state;
    }
  }
};

export default issueReducer;
