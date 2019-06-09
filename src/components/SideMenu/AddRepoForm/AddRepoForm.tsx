import React, { useState } from 'react';
import {
  Button,
  Container,
  Input,
} from 'semantic-ui-react';

const AddRepoForm: React.FC<any> = ({ addRepo }) => {
  const [repoName, setRepoName] = useState<string>('');

  const onAddRepo = () => {
    addRepo(repoName);
    setRepoName('');
  };

  return (
    <Container>
      <Input value={repoName} placeholder='Repository name (org/repo)' onChange={(e) => setRepoName(e.target.value)} />
      <Button onClick={onAddRepo}>Add</Button>
    </Container>
  );
}

export default AddRepoForm;
