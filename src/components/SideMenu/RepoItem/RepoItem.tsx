import React from 'react';
import {
  Container,
} from 'semantic-ui-react';

const RepoItem: React.FC<any> = ({ repoName }) => {
  return (
    <Container>
      { repoName }
    </Container>
  );
};

export default RepoItem;
