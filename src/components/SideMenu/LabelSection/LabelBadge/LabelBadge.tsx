import React from 'react';
import styled from 'styled-components';

const StyledLabelBadge = styled.div`
  background-color: #2e2727;
  border-radius: 3px;
  cursor: pointer;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  transition: 0.3s background-color;
`;

const LabelBadge: React.FC<any> = ({ repo, label, fetchIssuesWithLabel }) => {
  return (
    <StyledLabelBadge style={{ borderTop: '3px solid #' + label.color }}
      onClick={() => fetchIssuesWithLabel(repo, label.name)}
    >
      {label.name}
    </StyledLabelBadge>
  );
};

export default LabelBadge;
