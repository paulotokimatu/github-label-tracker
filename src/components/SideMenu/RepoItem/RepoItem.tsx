import React from 'react';
import {
  Label,
  List,
} from 'semantic-ui-react';

const RepoItem: React.FC<any> = ({ numberOfIssues, repoName, selectRepo }) => {
  return (
    <List.Item onClick={() => selectRepo(repoName)}>
      <List.Content floated='right'>
        <Label>
          {numberOfIssues}
        </Label>
      </List.Content>
      <List.Content>
        <List.Header>{repoName}</List.Header>
        <List.Description>Label</List.Description>
      </List.Content>
    </List.Item>
  );
};

export default RepoItem;
