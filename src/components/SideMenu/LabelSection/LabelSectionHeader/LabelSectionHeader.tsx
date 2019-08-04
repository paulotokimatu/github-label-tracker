import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import CircularButton from 'shared/CircularButton';

const StyledLabelSectionHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const StyledRepoTitle = styled.h2`
  font-weight: normal;
  margin: 0;
  margin-right: 0.5rem;
  text-transform: uppercase;
`;

const LabelSectionHeader: React.FC<any> = ({ fetchLabels, selectedRepo }) => {
  return (
    <StyledLabelSectionHeader>
      <StyledRepoTitle>{selectedRepo}</StyledRepoTitle>
      <CircularButton data-testid='refreshLabels' onClick={() => fetchLabels(selectedRepo, true)}>
        <Icon name='refresh' />
      </CircularButton>
    </StyledLabelSectionHeader>
  );
};

export default LabelSectionHeader;
