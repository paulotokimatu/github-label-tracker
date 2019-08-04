import { Dispatch } from 'redux';

import { cacheService } from 'core/cacheService';
import { AppState } from 'redux/reducers';
import { deleteIssues } from './issueActions';
import { deleteLabels } from './labelActions';

export const ADD_REPO = 'ADD_REPO';
export const DELETE_REPO = 'DELETE_REPO';

export const addRepo = (repoName: string) => (dispatch: Dispatch, getState: () => AppState) => {
  dispatch({
    payload: repoName,
    type: ADD_REPO,
  });

  // getState().repos is a Set, so we need to transform it to an Array
  cacheService.saveToCache('repo', 'all', Array.from(getState().repos));
};

export const deleteRepo = (repoName: string) => (dispatch: Dispatch) => {
  dispatch({
    payload: repoName,
    type: DELETE_REPO,
  });

  dispatch(deleteLabels(repoName));
  dispatch(deleteIssues(repoName));
  cacheService.deleteRepoFromStorage(repoName);
};
