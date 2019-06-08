import {
  ADD_TAG,
  DELETE_TAG,
  EDIT_TAG,
} from '../actions/tag';

const tagReducer = (state = new Set(), action: any) => {
  switch (action.type) {
    case ADD_TAG: {
      const newSet = new Set(state);
      newSet.add(action.payload);

      return newSet;
    }
    case DELETE_TAG: {
      const newSet = new Set(state);

      if (newSet.has(action.payload)) {
        newSet.delete(action.payload);
      }

      return newSet;
    }
    case EDIT_TAG: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default tagReducer;
