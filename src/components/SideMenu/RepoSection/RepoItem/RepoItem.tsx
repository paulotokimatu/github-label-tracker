import React, { SyntheticEvent } from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import Badge from 'shared/Badge';
import CircularButton from 'shared/CircularButton';
import FlexContainer from 'shared/FlexContainer';

const DeleteButton = styled(CircularButton)<any>`
  display: none;
  background: rgba(182, 35, 35, 1);
  font-size: 0.9rem;

  :hover,
  :focus {
    background-color: rgba(182, 35, 35, 0.75);
  }

  :active {
    background-color: rgba(182, 35, 35, 0.5);
  }
`;

const StyledRepoItem = styled.div<{ active?: boolean }>`
  align-content: center;
  background-color: ${(props) => props.active ? '#2E2727' : 'none'};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  transition: 0.2s background-color;

  :hover {
    background-color: ${(props) => props.active ? '#2E2727' : 'rgba(46, 39, 39, 0.5)'};
  }

  :hover ${Badge} {
    display: none;
  }

  :hover ${DeleteButton} {
    display: block;
  }
`;

const StyledRepoName = styled.h4`
  margin: 0.25rem 0;
  text-transform: uppercase;
`;

const StyledMutedText = styled.span`
  color: rgba(255, 255, 255, 0.3);
`;

const RepoItem: React.FC<any> = ({ numberOfIssues, repoName, deleteRepo, selectRepo, selectedRepo, selectedLabel }) => {
  const isActive = selectedRepo === repoName;
  return (
    <StyledRepoItem data-testid='repoItem' active={isActive} onClick={() => selectRepo(repoName)}>
      <div>
        <StyledRepoName>{repoName}</StyledRepoName>
        <em>
          {selectedLabel || <StyledMutedText>No label selected</StyledMutedText>}
        </em>
      </div>
      <FlexContainer alignItems='center' justifyContent='center'>
        <DeleteButton aria-label='delete repo'
          onClick={(e: SyntheticEvent) => { e.stopPropagation(); deleteRepo(repoName); }}
        >
          <Icon name='trash alternate outline' />
        </DeleteButton>
        <Badge active={isActive}>{numberOfIssues}</Badge>
      </FlexContainer>
    </StyledRepoItem>
  );
};

export default RepoItem;
