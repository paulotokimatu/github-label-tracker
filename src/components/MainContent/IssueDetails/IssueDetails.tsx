import React from 'react';
import styled from 'styled-components';

import { formatTime } from 'core/helpers';
import IssueCommentsBadge from './IssueCommentsBadge';

const StyledIssueItem = styled.div`
  align-content: center;
  background-color: #201919;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin: 0.75rem 0;
  padding: 1rem 1.5rem;
`;

const StyledIssueName = styled.a`
  color: #DADADA;
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  :hover {
    color: #5833CA;
  }
`;

const StyledMarginRight = styled.span`
  margin-right: 1rem;
`;

const IssueDetails: React.FC<any> = ({ issue }) => {
  return (
    <StyledIssueItem key={issue.url}>
      <div>
        <StyledIssueName href={issue.url}>{issue.title}</StyledIssueName>
        <div>
          <StyledMarginRight>
            <em>Updated at</em> <strong>{formatTime(issue.updated_at)}</strong>
          </StyledMarginRight>
          <span>
            <em>Created at</em> <strong>{formatTime(issue.created_at)}</strong>
          </span>
        </div>
      </div>
      <IssueCommentsBadge numOfComments={issue.comments} />
    </StyledIssueItem>
  );
};

export default IssueDetails;
