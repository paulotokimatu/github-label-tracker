import React, { useState } from 'react';
import styled from 'styled-components';

import StyledInput from 'shared/StyledInput';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
`;

const AddRepoForm: React.FC<any> = ({ addRepo, fetchLabels, selectRepo }) => {
  const [repoName, setRepoName] = useState<string>('axios/axios');

  const onAddRepo = (event: any) => {
    event.preventDefault();
    addRepo(repoName);
    fetchLabels(repoName);
    selectRepo(repoName);
    setRepoName('');
  };

  return (
    <StyledForm onSubmit={onAddRepo}>
      <StyledInput value={repoName} placeholder='Repository name (org/repo)'
        onChange={(e) => setRepoName(e.target.value)}
      />
    </StyledForm>
  );
};

export default AddRepoForm;
