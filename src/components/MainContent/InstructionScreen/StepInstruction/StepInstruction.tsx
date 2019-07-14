import React from 'react';
import styled from 'styled-components';

import { Instruction } from '../InstructionScreen';

const StyledStep = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`;

const StyledStepContent = styled.div`
  background: #201919;
  border-radius: 2px;
  border-top: 5px solid #5833CA;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  height: 150px;
  justify-content: center;
  margin: 1.5rem 0;
  padding: 15px;
  text-align: center;
  width: 225px;
`;

const StyledStepNumber = styled.div`
  background: rgba(32, 25, 25, 0.5);
  border-radius: 5px;
  font-size: 3.5rem;
  left: 5px;
  padding: 40px 20px 40px 15px;
  position: relative;
`;

const StyledStepTitle = styled.h3`
  text-transform: uppercase;
`;

const StyledStepDetails = styled.div`
  font-size: 1rem;
`;

const StepInstruction: React.FC<{ i: number, instruction: Instruction }> = ({ i, instruction }) => {
  return (
    <StyledStep>
      <StyledStepNumber>{i}</StyledStepNumber>
      <StyledStepContent>
        <StyledStepTitle>{instruction.title}</StyledStepTitle>
        <StyledStepDetails>
          <div>{instruction.text}</div>
          <div>{instruction.example}</div>
        </StyledStepDetails>
      </StyledStepContent>
    </StyledStep>
  );
};

export default StepInstruction;
