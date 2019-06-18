import React from 'react';
import styled from 'styled-components';

import Divider from 'shared/Divider';
import LabelSection from './LabelSection/LabelSection';
import RepoSection from './RepoSection/RepoSection';

const StyledSideMenu = styled.div`
  background-color: #201919;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-shrink: 0;
  height: 100%;
  width: 650px;
`;

const SideMenu: React.FC<any> = () => {
  return (
    <StyledSideMenu>
      <RepoSection />
      <Divider />
      <LabelSection />
    </StyledSideMenu>
  );
};

export default SideMenu;
