import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { AppState } from 'redux/reducers';
import InstructionScreen from './InstructionScreen/InstructionScreen';
import IssueList from './IssueList/IssueList';

const StyledMain = styled.div`
  flex-grow: 2;
  overflow: auto;
  padding: 1.5rem;
`;

const mapStateToProps = (state: AppState) => {
  return {
    issues: state.issues,
    selectedLabels: state.ui.selectedLabels,
    selectedRepo: state.ui.selectedRepo,
  };
};

const MainContent: React.FC<any> = ({ issues, selectedRepo, selectedLabels }) => (
  <StyledMain>
    {(issues.isFetching || issues.data[selectedRepo])
      ? <IssueList selectedRepo={selectedRepo} issues={issues} selectedLabel={selectedLabels[selectedRepo]} />
      : <InstructionScreen />
    }
  </StyledMain>
);

export default connect(mapStateToProps)(MainContent);
