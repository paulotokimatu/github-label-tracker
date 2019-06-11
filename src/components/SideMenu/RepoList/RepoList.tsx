import React from 'react';
import {
  Container,
} from 'semantic-ui-react';
import RepoItem from '../RepoItem/RepoItem';

const RepoList: React.FC<any> = ({ repos, selectRepo, selectedRepo }) => {
  const reposArray: string[] = [];

  repos.forEach((repoName: string) => {
    reposArray.push(repoName);
  });

  return (
    <React.Fragment>
      {
        reposArray.map((repoName: string) => (
          <Container key={repoName} onClick={() => selectRepo(repoName)}>
            <RepoItem repoName={repoName} />
          </Container>
        ))
      }
    </React.Fragment>
  );
}

export default RepoList;
