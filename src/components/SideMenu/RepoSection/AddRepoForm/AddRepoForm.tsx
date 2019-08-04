import React, { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';

import StyledInput from 'shared/StyledInput';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
`;

const AddRepoForm: React.FC<any> = ({ addRepo, selectRepo }) => {
  const [repoName, setRepoName] = useState<string>('axios/axios');

  const onAddRepo = (event: SyntheticEvent) => {
    event.preventDefault();
    const repoNameWithoutSpaces = repoName.replace(/\s+/g, '');
    addRepo(repoNameWithoutSpaces);
    selectRepo(repoNameWithoutSpaces);
    setRepoName('');
  };

  return (
    <StyledForm onSubmit={onAddRepo} data-testid='addRepo'>
      <StyledInput value={repoName} placeholder='Repository name <org/repo>'
        onChange={(e) => setRepoName(e.target.value)}
      />
    </StyledForm>
  );
};

export default AddRepoForm;
