import React from 'react';
import {
  Icon,
  Label,
  List,
} from 'semantic-ui-react';

const IssueDetails: React.FC<any> = ({ issues }) => {
  return (
    <React.Fragment>
      {
        issues.map((issue: any) => (
          <List.Item key={issue.url}>
            <List.Content floated='right'>
              <Label>
                <Icon name='comment alternate outline' /> {issue.comments}
              </Label>
            </List.Content>
            <List.Content>
              <List.Header href={issue.url} as='a'>{issue.title}</List.Header>
              <List.Description>{issue.updated_at}</List.Description>
            </List.Content>
          </List.Item>
        ))
      }
    </React.Fragment>
  );
};

export default IssueDetails;
