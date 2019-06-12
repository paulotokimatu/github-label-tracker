import React, { useState } from 'react';
import {
  Button,
  Container,
  Input,
} from 'semantic-ui-react';

const AddRepoForm: React.FC<any> = ({ addRepo, fetchLabels, selectRepo }) => {
  const [repoName, setRepoName] = useState<string>('axios/axios');

  const onAddRepo = () => {
    addRepo(repoName);
    fetchLabels(repoName);
    selectRepo(repoName);
    setRepoName('');
  };

  return (
    <Container style={{ textAlign: 'center' }}>
      {/* <Input onChange={(e) => setRepoName(e.target.value)} placeholder='Repository name (org/repo)'
        action={<Button onClick={onAddRepo}>Add</Button>}
      /> */}
      <Input value={repoName} placeholder='Repository name (org/repo)' onChange={(e) => setRepoName(e.target.value)} />
      <Button onClick={onAddRepo}>Add</Button>
    </Container>
  );
};

export default AddRepoForm;
