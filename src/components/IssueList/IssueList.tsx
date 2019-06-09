import React from 'react';
import {
  Segment,
} from 'semantic-ui-react';

const IssueList: React.FC<any> = ({ issues }) => {
  console.log(2, issues)
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

export default IssueList;
