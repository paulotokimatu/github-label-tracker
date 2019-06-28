import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledLabelSectionEmpty = styled.div`
  align-items: center;
  background-color: #2E2727;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0 1.5rem;
  padding: 2.5rem 1rem;
  text-align: center;
`;

const StyledIcon = styled.div`
  align-items: center;
  border: 3px solid #558eec;
  border-radius: 50%;
  color: #558eec;
  display: flex;
  justify-content: center;
  height: 50px;
  padding: 1rem;
  width: 50px;

  i {
    margin: 0;
  }
`;

const StyledMessage = styled.div`
  margin: 1rem 0;
`;

const LabelSectionEmpty: React.FC<any> = () => {
  return (
    <StyledLabelSectionEmpty>
      <StyledIcon><Icon name='exclamation' size='big' /></StyledIcon>
      <StyledMessage><h3>We didn't find any labels for this repository!</h3></StyledMessage>
      <div>Please check if the repository name is correct and your internet connection is stable.</div>
    </StyledLabelSectionEmpty>
  );
};

export default LabelSectionEmpty;
