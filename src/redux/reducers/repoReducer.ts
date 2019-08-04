import {
  ADD_REPO,
  DELETE_REPO,
} from '../actions/repoActions';

const repoReducer = (state: Set<string> = new Set(), action: any) => {
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
    default: {
      return state;
    }
  }
};

export default repoReducer;
