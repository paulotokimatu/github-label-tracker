import React from 'react';
import {
  Container,
} from 'semantic-ui-react';
import RepoItem from '../RepoItem/RepoItem';

const RepoList: React.FC<any> = ({ repos, selectRepo }) => {
  const reposArray: string[] = [];

  repos.forEach((repoName: string) => {
    reposArray.push(repoName);
  });

  return (
    <Container>
      {
        reposArray.map((repoName: string) => (
          <div key={repoName} onClick={() => selectRepo(repoName)}>
            <RepoItem repoName={repoName} />
          </div>
        ))
      }
    </Container>
  );
}

export default RepoList;
