import React from 'react';
import styled from 'styled-components';

import StepInstruction from './StepInstruction/StepInstruction';

export interface Instruction {
  example: string;
  text: string;
  title: string;
}

const instructions: Instruction[] = [
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

const StyledInstructionScreen = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const InstructionScreen: React.FC<{ instructions?: Instruction[] }> = ({ instructions }) => {
  return (
    <StyledInstructionScreen data-testid='instructions'>
      {instructions!.map((instruction: Instruction, i: number) => (
        <StepInstruction key={i} i={i + 1} instruction={instruction} />
      ))}
    </StyledInstructionScreen>
  );
};

InstructionScreen.defaultProps = { instructions };

export default InstructionScreen;
