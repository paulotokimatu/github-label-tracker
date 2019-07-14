import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { AppState } from 'redux/reducers';
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

const mapStateToProps = (state: AppState) => {
  return {
    selectedRepo: state.ui.selectedRepo,
  };
};

const SideMenu: React.FC<any> = ({ selectedRepo }) => {
  return (
    <StyledSideMenu>
      <RepoSection />
      {(selectedRepo)
        ? (
          <React.Fragment>
            <Divider />
            <LabelSection />
          </React.Fragment>
          )
        : null
      }
    </StyledSideMenu>
  );
};

export default connect(mapStateToProps)(SideMenu);
