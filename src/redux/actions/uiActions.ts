import { Dispatch } from 'redux';

import { fetchLabels } from './labelActions';

export const SELECT_LABEL = 'SELECT_LABEL';
export const SELECT_REPO = 'SELECT_REPO';

export const selectRepo = (repoName: string) => (dispatch: Dispatch<any>) => {
  dispatch(fetchLabels(repoName));

  dispatch({
    payload: repoName,
    type: SELECT_REPO,
  });
};

export const selectLabel = (repoName: string, labelName: string) => (
  {
    payload: {
      label: labelName,
      repo: repoName,
    },
    type: SELECT_LABEL,
  }
);
