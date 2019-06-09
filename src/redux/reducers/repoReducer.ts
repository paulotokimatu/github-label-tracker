import {
  ADD_REPO,
  DELETE_REPO,
  EDIT_REPO,
} from '../actions/repoActions';

const repoReducer = (state = new Set(), action: any) => {
  switch (action.type) {
    case ADD_REPO: {
      const newSet = new Set(state);
      newSet.add(action.payload);

      return newSet;
    }
    case DELETE_REPO: {
      const newSet = new Set(state);

      if (newSet.has(action.payload)) {
        newSet.delete(action.payload);
      }

      return newSet;
    }
    case EDIT_REPO: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default repoReducer;
