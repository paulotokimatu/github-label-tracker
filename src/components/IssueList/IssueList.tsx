import React from 'react';
import {
  Segment,
} from 'semantic-ui-react';

const IssueList: React.FC<any> = ({ issues }) => {
  const repoNames: string[] = Object.keys(issues);
  return (
    <Segment>
      {
        repoNames.map((repoName: string) => (
          issues[repoName].map((issue: any) => (
            <div key={issue.url}>
              <div>{issue.title}</div>
              <div>{issue.comments}</div>
              <div>{issue.updated_at}</div>
              <div>{issue.url}</div>
            </div>
          ))
        ))
      }
    </Segment>
  );
}

export default IssueList;
