import React from 'react';
import styled from 'styled-components';

import Badge from 'shared/Badge';
import FlexContainer from 'shared/FlexContainer';

const StyledIssueCommentsBadge = styled(Badge)`
  background-color: #023DA0;
  min-width: 42px;
  width: auto;
`;

const IssueCommentsBadge: React.FC<any> = ({ numOfComments }) => {
  return (
    <FlexContainer alignItems='center'>
      <StyledIssueCommentsBadge>{numOfComments}</StyledIssueCommentsBadge>
    </FlexContainer>
  );
};

export default IssueCommentsBadge;
