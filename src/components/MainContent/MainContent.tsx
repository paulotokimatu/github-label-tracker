import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Container,
  Divider,
} from 'semantic-ui-react';

import { issueActions, labelActions } from '../../redux/actions';
import IssueList from './IssueList/IssueList';
import LabelList from './LabelList/LabelList';
import NoContent from './NoContent/NoContent';

const mapStateToProps = (state: any) => {
  return {
    issues: state.issues,
    labels: state.labels,
    selectedRepo: state.ui.selectedRepo,
  };
};

const MainContent: React.FC<any> = ({ fetchLabels, fetchIssues, issues, labels, selectedRepo }) => {
  if (!selectedRepo) {
    return (
      <div className='main'>
        <NoContent />
      </div>
    );
  }

  return (
    <div className='main'>
      <h1>{ selectedRepo }</h1>
      <LabelList fetchLabels={fetchLabels} fetchIssues={fetchIssues} selectedRepo={selectedRepo} labels={labels} />
      <Divider />
      <IssueList repo={selectedRepo} issues={issues} />
    </div>
  );
};

export default connect(mapStateToProps, {
  fetchIssues: issueActions.fetchIssues,
  fetchLabels: labelActions.fetchLabels,
})(MainContent);
