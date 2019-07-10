import axios from 'axios';

import Issue from 'core/models/Issue';

export const ISSUE_REQUEST_START = 'ISSUE_REQUEST_START';
export const ISSUE_REQUEST_END = 'ISSUE_REQUEST_END';
export const GET_ISSUES = 'GET_ISSUES';
export const DELETE_ISSUES = 'DELETE_ISSUES';

export const requestStart = () => (
  { type: ISSUE_REQUEST_START }
);

export const requestEnd = () => (
  { type: ISSUE_REQUEST_END }
);

export const deleteIssues = (repoName: string) => (
  {
    payload: { repoName },
    type: DELETE_ISSUES,
  }
);

export const getIssuesOfRepo = (repoName: string, issues: Issue[]) => (
  {
    payload: { repoName, issues },
    type: GET_ISSUES,
  }
);

export const fetchIssues = (repo: string, labels: string) => (dispatch: any) => {
  dispatch(requestStart());

  return axios.get(`https://api.github.com/repos/${repo}/issues?labels=${labels}`)
    .then(
      (response: any) => {
        dispatch(requestEnd());
        const parsedResponseData: Issue[] = response.data.map((data: any): Issue => {
          return {
            comments: data.comments,
            created_at: data.created_at,
            title: data.title,
            updated_at: data.updated_at,
            url: data.html_url,
          };
        });
        dispatch(getIssuesOfRepo(repo, parsedResponseData));
      },
      (error: string) => {
        dispatch(requestEnd());
        console.log('An error occurred.', error);
      },
    );
};
