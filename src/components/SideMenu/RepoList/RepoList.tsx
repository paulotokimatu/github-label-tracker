import React from 'react';
import {
  Menu,
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
          <Menu.Item key={repoName} onClick={() => selectRepo(repoName)} active={selectedRepo === repoName}>
            <RepoItem repoName={repoName} />
          </Menu.Item>
        ))
      }
    </React.Fragment>
  );
}

export default RepoList;
