import React from 'react';
import { connect } from 'react-redux';

import { issueActions, labelActions } from 'redux/actions';
import FlexContainer from 'shared/FlexContainer';
import LoadingSpinner from 'shared/LoadingSpinner';
import SectionTitle from 'shared/SectionTitle';
import SideMenuSection from '../SideMenuSection';
import LabelList from './LabelList/LabelList';
import LabelSectionEmpty from './LabelSectionEmpty/LabelSectionEmpty';
import LabelSectionHeader from './LabelSectionHeader/LabelSectionHeader';

const mapStateToProps = (state: any) => {
  return {
    labels: state.labels,
    selectedRepo: state.ui.selectedRepo,
  };
};

const LabelSection: React.FC<any> = ({ fetchLabels, fetchIssues, labels, selectedRepo }) => {
  if (labels.isFetching) {
    return (
      <SideMenuSection>
        <LabelSectionHeader fetchLabels={fetchLabels} selectedRepo={selectedRepo} />
        <FlexContainer alignItems='center' justifyContent='center' flexDirection='column' margin='2.5rem 0 1.5rem'>
          <LoadingSpinner />
          <h3>Loading...</h3>
        </FlexContainer>
      </SideMenuSection>
    );
  }

  if (!labels.data[selectedRepo] || labels.data[selectedRepo].length === 0) {
    return (
      <SideMenuSection>
        <LabelSectionHeader fetchLabels={fetchLabels} selectedRepo={selectedRepo} />
        <LabelSectionEmpty />
      </SideMenuSection>
    );
  }

  return (
    <SideMenuSection>
      <LabelSectionHeader fetchLabels={fetchLabels} selectedRepo={selectedRepo} />
      <FlexContainer alignItems='center' margin='1.5rem 0'>
        <SectionTitle>Labels ({labels.data[selectedRepo] ? labels.data[selectedRepo].length : 0})</SectionTitle>
        <div className='divider-middle'></div>
      </FlexContainer>
      {/* TODO maybe pass only the data */}
      <LabelList fetchIssues={fetchIssues} selectedRepo={selectedRepo} labels={labels} />
    </SideMenuSection>
  );
};

export default connect(mapStateToProps, {
  fetchIssues: issueActions.fetchIssues,
  fetchLabels: labelActions.fetchLabels,
})(LabelSection);
