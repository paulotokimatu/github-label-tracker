import { fetchLabels } from './labelActions';

export const SELECT_REPO = 'SELECT_REPO';

// export const selectRepo = (repoName: string) => (
//   {
//     payload: repoName,
//     type: SELECT_REPO,
//   }
// );

export const selectRepo = (repoName: string) => (dispatch: any) => {
  dispatch(fetchLabels(repoName));

  dispatch({
    payload: repoName,
    type: SELECT_REPO,
  });
};
