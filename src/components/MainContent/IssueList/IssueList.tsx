import React from 'react';

import FlexContainer from 'shared/FlexContainer';
import LoadingSpinner from 'shared/LoadingSpinner';
import SectionTitle from 'shared/SectionTitle';
import IssueDetails from '../IssueDetails/IssueDetails';

const IssueList: React.FC<any> = ({ issues, repo }) => {
  if (issues.isFetching) {
    return (
      <div>
        <FlexContainer alignItems='center' margin='0.5rem 0 1.5rem'>
          <SectionTitle as='h2'>Issues</SectionTitle>
          <div className='divider-middle'></div>
        </FlexContainer>
        <FlexContainer alignItems='center' justifyContent='center' flexDirection='column' margin='2.5rem 0 1.5rem'>
          <LoadingSpinner />
          <h3>Loading...</h3>
        </FlexContainer>
      </div>
    );
  }

  return (
    <div>
      <FlexContainer alignItems='center' margin='0.5rem 0 1.5rem'>
        <SectionTitle as='h2'>Issues ({issues.data[repo] ? issues.data[repo].length : 0})</SectionTitle>
        <div className='divider-middle'></div>
      </FlexContainer>
      <div>
        {issues.data[repo].map((issue: any) => <IssueDetails key={issue.url} issue={issue} />)}
      </div>
    </div>
  );
};

export default IssueList;
