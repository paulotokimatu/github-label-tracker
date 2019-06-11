import axios from 'axios';

export const SELECT_LABEL = 'SELECT_LABEL';
export const UNSELECT_LABEL = 'UNSELECT_LABEL';
export const FETCH_LABELS = 'FETCH_LABELS';
export const SET_LABELS = 'SET_LABELS';

export const selectLabel = (repoName: string, label: string) => (
  {
    payload: { repoName, label },
    type: SELECT_LABEL,
  }
);

export const setLabels = (repoName: string, labels: any) => (
  {
    payload: { repoName, labels },
    type: SET_LABELS,
  }
);

export const fetchLabels = (repoName: string) => (dispatch: any) => {
  // dispatch(requestStart());

  return axios.get(`https://api.github.com/repos/${repoName}/labels?per_page=100`)
    .then(
      (response: any) => {
        // dispatch(requestEnd());
        const parsedResponseData = response.data.map((data: any) => {
          return {
            color: data.color,
            name: data.name,
          };
        });
        dispatch(setLabels(repoName, parsedResponseData));
      },
      (error: string) => console.log('An error occurred.', error),
    );
};
