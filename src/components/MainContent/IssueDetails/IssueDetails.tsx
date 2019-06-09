import React from 'react';
import {
  Segment,
} from 'semantic-ui-react';

const IssueDetails: React.FC<any> = ({ issues }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default IssueDetails;
