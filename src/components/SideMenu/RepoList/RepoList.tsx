import React from 'react';
import {
  Container,
  List,
} from 'semantic-ui-react';
import RepoItem from '../RepoItem/RepoItem';

const RepoList: React.FC<any> = ({ issues, repos, selectRepo, selectedRepo }) => {
  const reposArray: string[] = [];

  repos.forEach((repoName: string) => {
    reposArray.push(repoName);
  });

  return (
    <List selection divided inverted verticalAlign='middle'>
      {
        reposArray.map((repoName: string) => (
          <RepoItem key={repoName} repoName={repoName}
            selectRepo={selectRepo}
            numberOfIssues={issues.repos[repoName] ? issues.repos[repoName].length : 0}
          />
        ))
      }
    </List>
  );
}

export default RepoList;
