import React from 'react';
import {
  Segment,
} from 'semantic-ui-react';

const IssueDetails: React.FC<any> = ({ issues }) => {
  return (
    <Segment>
      {
        issues.map((issue: any) => (
          <div key={issue.url}>
            <div>{issue.title}</div>
            <div>{issue.comments}</div>
            <div>{issue.updated_at}</div>
            <div>{issue.url}</div>
          </div>
        ))
      }
    </Segment>
  );
}

export default IssueDetails;
