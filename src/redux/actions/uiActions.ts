export const SELECT_REPO = 'SELECT_REPO';

export const selectRepo = (repoName: string) => (
  {
    payload: repoName,
    type: SELECT_REPO,
  }
);
