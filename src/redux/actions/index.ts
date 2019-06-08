import * as repoActions from './repo';
import * as tagActions from './tag';

export {
  repoActions,
  tagActions,
};

// import axios from 'axios';

// export function fetchIssues() {
//   return (dispatch: any) => {
//     return axios.get('https://api.github.com/repos/axios/axios/issues')
//       .then(
//         response => response,
//         error => console.log('An error occurred.', error)
//       )
//       .then(json => {
//         console.log(json);
//       });
//   };
// }
