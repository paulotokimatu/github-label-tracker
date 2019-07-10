import {
  SELECT_LABEL,
  SELECT_REPO,
} from '../actions/uiActions';

const initialState = {
  selectedLabels: {},
  selectedRepo: '',
};

const uiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SELECT_REPO: {
      return { ...state, selectedRepo: action.payload };
    }
    case SELECT_LABEL: {
      return {
        ...state,
        selectedLabels: { [action.payload.repo]: action.payload.label },
      };
    }
    default: {
      return state;
    }
  }
};

export default uiReducer;
