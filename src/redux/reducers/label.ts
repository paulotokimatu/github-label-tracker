import {
  SET_LABELS,
} from '../actions/label';

const labelReducer = (state = {}, action: any) => {
  switch (action.type) {
    case SET_LABELS: {
      const newState: any = { ...state };
      newState[action.payload.repoName] = action.payload.labels;

      return newState;
    }
    default: {
      return state;
    }
  }
};

export default labelReducer;
