import { applyMiddleware, createStore  } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';
import { loadReposState } from './localStorage';

const persistedReposData = loadReposState();

const store =  createStore(
  rootReducer,
  {
    repos: new Set(persistedReposData),
  },
  applyMiddleware(
    thunkMiddleware,
  ),
);

export default store;
