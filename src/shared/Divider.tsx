import React from 'react';
import styled from 'styled-components';

const StyledVerticalDivider = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  height: 100%;
  min-width: 3px;
  width: 3px;
`;

const Divider: React.FC = () => {
  return (
    <StyledVerticalDivider />
  );
};

export default Divider;
