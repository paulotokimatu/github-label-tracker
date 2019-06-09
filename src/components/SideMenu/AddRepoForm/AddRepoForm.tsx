import React, { useState } from 'react';
import {
  Button,
  Container,
  Input,
} from 'semantic-ui-react';

const AddRepoForm: React.FC<any> = ({ addRepo, fetchLabels, selectRepo }) => {
  const [repoName, setRepoName] = useState<string>('');

  const onAddRepo = () => {
    addRepo(repoName);
    fetchLabels(repoName);
    selectRepo(repoName);
    setRepoName('');
  };

  return (
    <Container style={{ paddingLeft: 16, paddingRight: 16 }}>
      <Input value={repoName} placeholder='Repository name (org/repo)' onChange={(e) => setRepoName(e.target.value)} />
      <Button onClick={onAddRepo}>Add</Button>
    </Container>
  );
};

export default AddRepoForm;
