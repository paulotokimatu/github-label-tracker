import React from 'react';

import FlexContainer from 'shared/FlexContainer';
import SectionTitle from 'shared/SectionTitle';
import IssueDetails from '../IssueDetails/IssueDetails';

const IssueList: React.FC<any> = ({ issues, repo }) => {
  if (issues === undefined || !issues.repos[repo]) {
    return null;
  }

  return (
    <div>
      <FlexContainer alignItems='center' margin='0.5rem 0 1.5rem'>
        <SectionTitle as='h2'>Issues ({issues.repos[repo] ? issues.repos[repo].length : 0})</SectionTitle>
        <div className='divider-middle'></div>
      </FlexContainer>
      <div>
        {
          issues.repos[repo].map((issue: any) => (
            <IssueDetails issue={issue} />
          ))
        }
      </div>
    </div>
  );
};

export default IssueList;
