import axios from 'axios';

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_END = 'REQUEST_END';
export const GET_ISSUES = 'GET_ISSUES';

export const requestStart = () => (
  { type: REQUEST_START }
);

export const requestEnd = () => (
  { type: REQUEST_END }
);

export const getIssuesOfRepo = (repoName: string, issues: any) => (
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
        const parsedResponseData = response.data.map((data: any) => {
          return {
            comments: data.comments,
            title: data.title,
            updated_at: data.updated_at,
            url: data.url,
          };
        });
        dispatch(getIssuesOfRepo(repo, parsedResponseData));
      },
      (error: string) => console.log('An error occurred.', error),
    );
};
