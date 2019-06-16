import React from 'react';

import FlexContainer from 'shared/FlexContainer';
import SectionTitle from 'shared/SectionTitle';
import RepoItem from '../RepoItem/RepoItem';

const RepoList: React.FC<any> = ({ issues, repos, selectRepo, selectedRepo }) => {
  const reposArray: string[] = [];

  repos.forEach((repoName: string) => {
    reposArray.push(repoName);
  });

  return (
    <React.Fragment>
      <FlexContainer alignItems='center'>
        <SectionTitle>Repositories</SectionTitle>
        <div className='divider-middle'></div>
      </FlexContainer>
      {
        reposArray.map((repoName: string) => (
          <RepoItem key={repoName} repoName={repoName}
            selectRepo={selectRepo}
            selectedRepo={selectedRepo}
            numberOfIssues={issues.repos[repoName] ? issues.repos[repoName].length : 0}
          />
        ))
      }
    </React.Fragment>
  );
}

export default RepoList;
