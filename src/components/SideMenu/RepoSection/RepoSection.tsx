import React from 'react';
import { connect } from 'react-redux';

import { issueActions, repoActions, uiActions } from 'redux/actions';

import SideMenuSection from '../SideMenuSection';
import AddRepoForm from './AddRepoForm/AddRepoForm';
import RepoList from './RepoList/RepoList';
import UserMenu from './UserMenu/UserMenu';

const mapStateToProps = (state: any) => {
  return {
    issues: state.issues,
    repos: state.repos,
    selectedLabels: state.ui.selectedLabels,
    selectedRepo: state.ui.selectedRepo,
  };
};

const RepoSection: React.FC<any> = ({
  issues, repos, addRepo, deleteRepo, selectRepo, selectedRepo, selectedLabels,
 }) => {
  return (
    <SideMenuSection>
      <UserMenu />
      <AddRepoForm addRepo = { addRepo } selectRepo = { selectRepo } />
      <RepoList
        issues={issues}
        repos={repos}
        selectRepo={selectRepo}
        selectedRepo={selectedRepo}
        deleteRepo={deleteRepo}
        selectedLabels={selectedLabels}
      />
    </SideMenuSection>
  );
};

export default connect(mapStateToProps, {
  addRepo: repoActions.addRepo,
  deleteRepo: repoActions.deleteRepo,
  fetchIssues: issueActions.fetchIssues,
  selectRepo: uiActions.selectRepo,
})(RepoSection);
