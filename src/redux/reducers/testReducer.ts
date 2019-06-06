import { SET_FIELD } from '../actionTypes';

const initialState = {
  test: 'foo',
};

const testReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_FIELD: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default testReducer;
