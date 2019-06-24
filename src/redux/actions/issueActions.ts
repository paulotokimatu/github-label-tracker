import axios from 'axios';

export const ISSUE_REQUEST_START = 'ISSUE_REQUEST_START';
export const ISSUE_REQUEST_END = 'ISSUE_REQUEST_END';
export const GET_ISSUES = 'GET_ISSUES';

export const requestStart = () => (
  { type: ISSUE_REQUEST_START }
);

export const requestEnd = () => (
  { type: ISSUE_REQUEST_END }
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
