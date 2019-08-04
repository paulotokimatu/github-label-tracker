import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';

import { cacheService } from 'core/cacheService';
import Label from 'core/models/Label';
import MESSAGES from 'data/messages';
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

export const fetchLabels = (repoName: string, refreshCache: boolean = false) => (dispatch: Dispatch) => {
  dispatch(requestStart());

  const savedData = cacheService.loadFromCache('label', repoName);
  const request = savedData && !refreshCache ? Promise.resolve(savedData) : fetchLabelsFromApi(repoName);

  return request
    .then(
      (response: any) => {
        dispatch(requestEnd());
        cacheService.saveToCache('label', repoName, response);
        const data: any[] = response.data;
        const parsedResponseData: Label[] = data.map((data: any): Label => {
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
          dispatch(setAlert(MESSAGES.repositoryNotFound, 'error'));
        }
        console.log(MESSAGES.errorGeneric, error);
      },
    );
};

const fetchLabelsFromApi = (repoName: string) => {
  return axios.get(`https://api.github.com/repos/${repoName}/labels?per_page=100`);
};
