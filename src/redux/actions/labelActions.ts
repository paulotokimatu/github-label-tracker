import axios from 'axios';

import Label from 'core/models/Label';

export const LABEL_REQUEST_START = 'LABEL_REQUEST_START';
export const LABEL_REQUEST_END = 'LABEL_REQUEST_END';
export const SELECT_LABEL = 'SELECT_LABEL';
export const UNSELECT_LABEL = 'UNSELECT_LABEL';
export const FETCH_LABELS = 'FETCH_LABELS';
export const SET_LABELS = 'SET_LABELS';

export const requestStart = () => (
  { type: LABEL_REQUEST_START }
);

export const requestEnd = () => (
  { type: LABEL_REQUEST_END }
);

export const setLabels = (repoName: string, labels: Label[]) => (
  {
    payload: { repoName, labels },
    type: SET_LABELS,
  }
);

export const fetchLabels = (repoName: string) => (dispatch: any) => {
  dispatch(requestStart());

  return axios.get(`https://api.github.com/repos/${repoName}/labels?per_page=100`)
    .then(
      (response: any) => {
        dispatch(requestEnd());
        const parsedResponseData: Label[] = response.data.map((data: any): Label => {
          return {
            color: data.color,
            name: data.name,
          };
        });
        dispatch(setLabels(repoName, parsedResponseData));
      },
      (error: string) => {
        dispatch(requestEnd());
        console.log('An error occurred.', error);
      },
    );
};
