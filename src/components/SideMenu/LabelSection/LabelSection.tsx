import React from 'react';
import { connect } from 'react-redux';

import { issueActions, labelActions } from 'redux/actions';
import FlexContainer from 'shared/FlexContainer';
import SectionTitle from 'shared/SectionTitle';
import SideMenuSection from '../SideMenuSection';
import LabelList from './LabelList/LabelList';
import LabelSectionHeader from './LabelSectionHeader/LabelSectionHeader';

const mapStateToProps = (state: any) => {
  return {
    labels: state.labels,
    selectedRepo: state.ui.selectedRepo,
  };
};

const LabelSection: React.FC<any> = ({ fetchLabels, fetchIssues, labels, selectedRepo }) => {
  if (!selectedRepo) {
    return null;
  }

  if (!labels[selectedRepo] || labels[selectedRepo].length === 0) {
    return (
      <SideMenuSection>
        <LabelSectionHeader fetchLabels={fetchLabels} selectedRepo={selectedRepo} />
        No labels
      </SideMenuSection>
    );
  }

  return (
    <SideMenuSection>
      <LabelSectionHeader fetchLabels={fetchLabels} selectedRepo={selectedRepo} />
      <FlexContainer alignItems='center' margin='1.5rem 0'>
        <SectionTitle>Labels ({labels[selectedRepo] ? labels[selectedRepo].length : 0})</SectionTitle>
        <div className='divider-middle'></div>
      </FlexContainer>
      <LabelList fetchIssues={fetchIssues} selectedRepo={selectedRepo} labels={labels} />
    </SideMenuSection>
  );
};

export default connect(mapStateToProps, {
  fetchIssues: issueActions.fetchIssues,
  fetchLabels: labelActions.fetchLabels,
})(LabelSection);
