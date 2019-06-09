import React, { useState } from 'react';
import {
  Button,
  Container,
  Input,
} from 'semantic-ui-react';
import RepoDetails from '../RepoDetails/RepoDetails';

const RepoSection: React.FC<any> = ({ repos, onClick }) => {
  const [repoName, setRepoName] = useState<string>('');
  const reposArray: string[] = [];

  repos.forEach((repo: string) => {
    reposArray.push(repo);
  });

  const onAddRepo = () => {
    onClick(repoName);
    setRepoName('');
  }

  return (
    <Container>
      <Input value={repoName} placeholder='Repository name (org/repo)' onChange={(e) => setRepoName(e.target.value)} />
      <Button onClick={onAddRepo}>Add</Button>
      {
        reposArray.map((repo: string) => <RepoDetails key={repo} repo={repo}></RepoDetails>)
      }
    </Container>
  );
}

export default RepoSection;
