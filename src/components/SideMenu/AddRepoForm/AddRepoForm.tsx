import React, { useState } from 'react';
import {
  Button,
  Form,
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
    <Form style={{ textAlign: 'center' }}>
      {/* <Input onChange={(e) => setRepoName(e.target.value)} placeholder='Repository name (org/repo)'
        action={<Button onClick={onAddRepo}>Add</Button>}
      /> */}
      <Form.Group>
        <Form.Field>
          <Input value={repoName} placeholder='Repository name (org/repo)'
            onChange={(e) => setRepoName(e.target.value)}
          />
        </Form.Field>
        <Button type='submit' onClick={onAddRepo}>Add</Button>
      </Form.Group>
    </Form>
  );
};

export default AddRepoForm;
