import axios from 'axios';

import { SET_FIELD } from '../actionTypes';

export const changeField = (newValue: string) => ({
  payload: { test: newValue },
  type: SET_FIELD,
});

export function fetchIssues() {
  return (dispatch: any) => {
    return axios.get('https://api.github.com/repos/axios/axios/issues')
      .then(
        response => response,
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        console.log(json);
      });
  };
}
