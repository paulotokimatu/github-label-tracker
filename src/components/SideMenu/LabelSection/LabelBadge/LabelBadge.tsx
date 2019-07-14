import React from 'react';
import styled from 'styled-components';

interface LabelBadgeTypes {
  active?: boolean;
  color?: string;
}

const StyledLabelBadge = styled.div<LabelBadgeTypes>`
  background-color: #2e2727;
  border-radius: 3px;
  border-width: 3px;
  border-style: solid;
  border-color: ${(props) => props.active ? '#' + (props.color || '#c7def8') : '#2e2727'};
  border-top-color: ${(props) => props.color ? '#' + props.color : '#c7def8'};
  cursor: pointer;
  font-weight: ${(props) => props.active ? '600' : 'normal'};
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  transition: 0.3s background-color;
`;

const LabelBadge: React.FC<any> = ({ repo, label, fetchIssuesWithLabel }) => {
  return (
    <StyledLabelBadge color={label.color}
      onClick={() => fetchIssuesWithLabel(repo, label.name)}
    >
      {label.name}
    </StyledLabelBadge>
  );
};

export default LabelBadge;
