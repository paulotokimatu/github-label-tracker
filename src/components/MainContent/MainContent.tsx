import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Container,
} from 'semantic-ui-react';

import { issueActions, labelActions } from '../../redux/actions';
import IssueList from './IssueList/IssueList';
import LabelList from './LabelList/LabelList';

const mapStateToProps = (state: any) => {
  return {
    issues: state.issueReducer,
    labels: state.labelReducer,
    selectedRepo: state.uiReducer.selectedRepo,
  };
};

const MainContent: React.FC<any> = ({ fetchLabels, fetchIssues, issues, labels, selectedRepo }) => {
  return (
    <Container>
      <div>{ selectedRepo }</div>
      <Button onClick={() => fetchLabels(selectedRepo)}>Check labels</Button>
      <LabelList fetchIssues={fetchIssues} repo={selectedRepo} labels={labels} />
      <IssueList repo={selectedRepo} issues={issues} />
    </Container>
  );
};

export default connect(mapStateToProps, {
  fetchIssues: issueActions.fetchIssues,
  fetchLabels: labelActions.fetchLabels,
})(MainContent);
