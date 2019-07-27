import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from 'redux/reducers';

export const connectRender = (component: any, { initialState = {}, ...options } = {}) => {
  return render(
    <Provider store={createStore(
      rootReducer,
      initialState,
      applyMiddleware(
        thunkMiddleware,
      ),
    )}>{component}</Provider>,
  );
};
