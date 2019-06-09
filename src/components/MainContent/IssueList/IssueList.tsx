import React from 'react';
import {
  Segment,
} from 'semantic-ui-react';

import IssueDetails from '../IssueDetails/IssueDetails';

const IssueList: React.FC<any> = ({ issues, repo }) => {
  if (issues === undefined || !issues.repos[repo]) {
    return null;
  }

  return (
    <Segment>
      {(issues !== undefined && issues.repos[repo]) && <IssueDetails issues={issues.repos[repo]} />}
    </Segment>
  );
};

export default IssueList;
