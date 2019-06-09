import React from 'react';
import {
  Button,
  Container,
} from 'semantic-ui-react';

const IssueLabel: React.FC<any> = ({ repo, label, fetchIssuesWithLabel }) => {
  return (
    <Container>
      { label.name }
      <Button onClick={() => fetchIssuesWithLabel(repo, label.name)}>Get issues</Button>
    </Container>
  );
};

export default IssueLabel;
