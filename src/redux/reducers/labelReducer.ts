import {
  SET_LABELS,
} from '../actions/labelActions';

const initialState = {
  data: {},
  isFetching: false,
};

const labelReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LABELS: {
      const newState: any = { ...state };
      newState.data = {
        ...newState.data,
        [action.payload.repoName]: action.payload.labels,
      };

      return newState;
    }
    default: {
      return state;
    }
  }
};

export default labelReducer;
