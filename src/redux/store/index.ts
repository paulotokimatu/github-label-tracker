/* istanbul ignore file */

import { applyMiddleware, createStore  } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { cacheService } from 'core/cacheService';
import rootReducer from '../reducers';

const persistedReposData = cacheService.loadFromCache('repo', 'all') || [];

const store = createStore(
  rootReducer,
  {
    repos: new Set(persistedReposData),
  },
  applyMiddleware(
    thunkMiddleware,
  ),
);

export default store;
