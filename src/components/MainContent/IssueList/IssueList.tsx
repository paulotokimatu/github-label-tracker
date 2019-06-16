import React from 'react';

import SectionTitle from 'shared/SectionTitle';
import IssueDetails from '../IssueDetails/IssueDetails';

const IssueList: React.FC<any> = ({ issues, repo }) => {
  if (issues === undefined || !issues.repos[repo]) {
    return null;
  }

  return (
    <div>
      <SectionTitle as='h2'>Issues ({issues.repos[repo] ? issues.repos[repo].length : 0})</SectionTitle>
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
