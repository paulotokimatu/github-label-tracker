import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import Badge from 'shared/Badge';
import FlexContainer from 'shared/FlexContainer';

const StyledIssueCommentsBadge = styled(Badge)`
  background-color: #023DA0;
  min-width: 42px;
  padding: 0.25rem 0.5rem;
  width: auto;
`;

const StyleIcon = styled(Icon)`
  && {
    margin-right: 0.5rem;
  }
`;

const IssueCommentsBadge: React.FC<{ numOfComments: number }> = ({ numOfComments }) => {
  return (
    <FlexContainer alignItems='center'>
      <StyledIssueCommentsBadge>
        <StyleIcon name='comment alternate' />
        {numOfComments}
      </StyledIssueCommentsBadge>
    </FlexContainer>
  );
};

export default IssueCommentsBadge;
