import { saveState } from 'redux/store/localStorage';

export const ADD_REPO = 'ADD_REPO';
export const DELETE_REPO = 'DELETE_REPO';
export const EDIT_REPO = 'EDIT_REPO';

export const deleteRepo = (repoName: string) => (
  {
    payload: repoName,
    type: DELETE_REPO,
  }
);

export const editRepo = (oldRepoName: string, newRepoName: string) => (
  {
    payload: { oldRepoName, newRepoName },
    type: EDIT_REPO,
  }
);

export const addRepo = (repoName: string) => (dispatch: any, getState: any) => {
  dispatch({
    payload: repoName,
    type: ADD_REPO,
  });

  saveState(getState());
};
