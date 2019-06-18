import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { issueActions, labelActions } from 'redux/actions';
import InstructionScreen from './InstructionScreen/InstructionScreen';
import IssueList from './IssueList/IssueList';

const StyledMain = styled.div`
  flex-grow: 2;
  overflow: auto;
  padding: 1.5rem;
`;

const mapStateToProps = (state: any) => {
  return {
    issues: state.issues,
    labels: state.labels,
    selectedRepo: state.ui.selectedRepo,
  };
};

const MainContent: React.FC<any> = ({ issues, selectedRepo }) => (
  <StyledMain>
    {selectedRepo ? <IssueList repo={selectedRepo} issues={issues} /> : <InstructionScreen />}
  </StyledMain>
);

export default connect(mapStateToProps, {
  fetchIssues: issueActions.fetchIssues,
  fetchLabels: labelActions.fetchLabels,
})(MainContent);
