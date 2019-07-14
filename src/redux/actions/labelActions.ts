import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';

import Label from 'core/models/Label';
import { setAlert } from './alertActions';

export const LABEL_REQUEST_START = 'LABEL_REQUEST_START';
export const LABEL_REQUEST_END = 'LABEL_REQUEST_END';
export const SET_LABELS = 'SET_LABELS';
export const DELETE_LABELS = 'DELETE_LABELS';

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

export const deleteLabels = (repoName: string) => (
  {
    payload: { repoName },
    type: DELETE_LABELS,
  }
);

export const fetchLabels = (repoName: string) => (dispatch: Dispatch) => {
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
      (error: AxiosError) => {
        dispatch(requestEnd());
        if (error.response && error.response.status === 404) {
          dispatch(setAlert('Repository not found.', 'error'));
        }
        console.log('An error occurred.', error);
      },
    );
};
