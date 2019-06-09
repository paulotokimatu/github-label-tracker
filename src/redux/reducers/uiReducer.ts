import {
  SELECT_REPO,
} from '../actions/uiActions';

const initialState = {
  selectedRepo: '',
};

const uiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SELECT_REPO: {
      return { ...state, selectedRepo: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default uiReducer;
