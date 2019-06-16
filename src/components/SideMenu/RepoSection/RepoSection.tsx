import React from 'react';
import { connect } from 'react-redux';

import { issueActions, labelActions, repoActions, uiActions } from 'redux/actions';

import SideMenuSection from '../SideMenuSection';
import AddRepoForm from './AddRepoForm/AddRepoForm';
import RepoList from './RepoList/RepoList';
import UserMenu from './UserMenu/UserMenu';

const mapStateToProps = (state: any) => {
  return {
    issues: state.issues,
    repos: state.repos,
    selectedRepo: state.ui.selectedRepo,
  };
};

const RepoSection: React.FC<any> = ({ issues, repos, addRepo, fetchLabels, selectRepo, selectedRepo }) => {
  return (
    <SideMenuSection>
      <UserMenu />
      <AddRepoForm addRepo = { addRepo } fetchLabels = { fetchLabels } selectRepo = { selectRepo } />
      <RepoList issues={issues} repos={repos} selectRepo={selectRepo} selectedRepo={selectedRepo} />
    </SideMenuSection>
  );
};

export default connect(mapStateToProps, {
  addRepo: repoActions.addRepo,
  fetchIssues: issueActions.fetchIssues,
  fetchLabels: labelActions.fetchLabels,
  selectRepo: uiActions.selectRepo,
})(RepoSection);
