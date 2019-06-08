import React, { useState } from 'react';
import {
  Button,
  Input,
  Segment,
} from 'semantic-ui-react';

const RepoSection: React.FC<any> = ({ repos, onClick }) => {
  const [repoName, setRepoName] = useState<any>('');
  const reposArray: string[] = [];

  repos.forEach((repo: string) => {
    reposArray.push(repo);  
  });

  const onAddRepo = () => {
    onClick(repoName);
    setRepoName('');
  }

  return (
    <Segment>
      <Input value={repoName} placeholder='Repository name (org/repo)' onChange={(e) => setRepoName(e.target.value)} />
      <Button onClick={onAddRepo}>Add</Button>
      {
        reposArray.map((repo: string) => <div key={repo}>{repo}</div>)
      }
    </Segment>
  );
}

export default RepoSection;
