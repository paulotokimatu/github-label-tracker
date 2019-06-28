import { applyMiddleware, createStore  } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';
import { loadState } from './localStorage';

const persistedState = loadState();

const store =  createStore(
  rootReducer,
  {
    repos: new Set(persistedState.repos),
    ui: persistedState.ui,
  },
  applyMiddleware(
    thunkMiddleware,
  ),
);

export default store;
