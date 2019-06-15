import React from 'react';
import {
  Icon,
  Label,
  List,
} from 'semantic-ui-react';
import { formatTime } from '../../../core/helpers';

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
              <List.Description>
                Created at: {formatTime(issue.created_at)} / Updated at: {formatTime(issue.updated_at)}
              </List.Description>
            </List.Content>
          </List.Item>
        ))
      }
    </React.Fragment>
  );
};

export default IssueDetails;
