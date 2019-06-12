import React from 'react';
import {
  List,
  Segment,
} from 'semantic-ui-react';

import IssueDetails from '../IssueDetails/IssueDetails';

const IssueList: React.FC<any> = ({ issues, repo }) => {
  if (issues === undefined || !issues.repos[repo]) {
    return null;
  }

  return (
    <Segment>
      <h3>
        {issues.repos[repo].length} Issues
      </h3>
      <List divided inverted relaxed verticalAlign='middle'>
        <IssueDetails issues={issues.repos[repo]} />
      </List>
    </Segment>
  );
};

export default IssueList;
