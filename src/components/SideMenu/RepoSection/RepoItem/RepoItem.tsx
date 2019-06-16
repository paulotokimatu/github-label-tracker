import React from 'react';
import styled from 'styled-components';

import Badge from 'shared/Badge';
import FlexContainer from 'shared/FlexContainer';

const StyledRepoItem = styled.div<any>`
  align-content: center;
  background-color: ${(props) => props.active ? '#2E2727' : 'none'};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  transition: 0.2s background-color;

  :hover {
    background-color: ${(props) => props.active ? '#2E2727' : 'rgba(46, 39, 39, 0.5)'};
  }
`;

const StyledRepoName = styled.h4`
  margin: 0.25rem 0;
  text-transform: uppercase;
`;

const RepoItem: React.FC<any> = ({ numberOfIssues, repoName, selectRepo, selectedRepo }) => {
  const isActive = selectedRepo === repoName;
  return (
    <StyledRepoItem active={isActive} onClick={() => selectRepo(repoName)}>
      <div>
        <StyledRepoName>{repoName}</StyledRepoName>
        <em>Help wanted</em>
      </div>
      <FlexContainer alignItems='center'>
        <Badge active={isActive}>{numberOfIssues}</Badge>
      </FlexContainer>
    </StyledRepoItem>
  );
};

export default RepoItem;
