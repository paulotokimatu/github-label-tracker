import React from 'react';

import FlexContainer from 'shared/FlexContainer';
import SectionTitle from 'shared/SectionTitle';
import RepoItem from '../RepoItem/RepoItem';

const RepoList: React.FC<any> = ({ issues, repos, deleteRepo, selectRepo, selectedRepo }) => {
  const reposArray: string[] = [];

  repos.forEach((repoName: string) => {
    reposArray.push(repoName);
  });

  return (
    <React.Fragment>
      <FlexContainer alignItems='center' margin='1.5rem 0 1rem'>
        <SectionTitle>Repositories</SectionTitle>
        <div className='divider-middle'></div>
      </FlexContainer>
      {
        reposArray.map((repoName: string) => (
          <RepoItem key={repoName} repoName={repoName}
            deleteRepo={deleteRepo}
            selectRepo={selectRepo}
            selectedRepo={selectedRepo}
            numberOfIssues={issues.data[repoName] ? issues.data[repoName].length : 0}
          />
        ))
      }
    </React.Fragment>
  );
};

export default RepoList;
