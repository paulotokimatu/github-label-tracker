import React from 'react';
import styled from 'styled-components';

import StepInstruction from './StepInstruction/StepInstruction';

const instructions = [
  {
    example: 'Example: facebook/react',
    text: 'Add the GitHub repositories you want to track.',
    title: 'Repository',
  },
  {
    example: 'Example: "Help wanted"',
    text: 'For each repo, select the label you want to check.',
    title: 'Labels',
  },
  {
    example: '',
    text: 'Check the details of the last 30 issues for that label, like comments, title and date.',
    title: 'Issues',
  },
];

const StyledNoContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`;

const NoContent: React.FC<any> = () => {
  return (
    <StyledNoContent>
      {instructions.map((instruction: any, i: number) => (
        <StepInstruction key={i} i={i + 1} instruction={instruction} />
      ))}
    </StyledNoContent>
  );
};

export default NoContent;
