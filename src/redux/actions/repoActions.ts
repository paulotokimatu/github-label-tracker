import { deleteRepoFromStorage, saveReposState } from 'redux/store/localStorage';

import { deleteIssues } from './issueActions';
import { deleteLabels } from './labelActions';

export const ADD_REPO = 'ADD_REPO';
export const DELETE_REPO = 'DELETE_REPO';

export const addRepo = (repoName: string) => (dispatch: any, getState: any) => {
  dispatch({
    payload: repoName,
    type: ADD_REPO,
  });

  saveReposState(getState().repos);
};

export const deleteRepo = (repoName: string) => (dispatch: any, getState: any) => {
  dispatch({
    payload: repoName,
    type: DELETE_REPO,
  });

  dispatch(deleteLabels(repoName));
  dispatch(deleteIssues(repoName));
  deleteRepoFromStorage(repoName);
};
