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
    selectedRepo: state.ui.selectedRepo,
  };
};

const RepoSection: React.FC<any> = ({ issues, repos, addRepo, selectRepo, selectedRepo }) => {
  return (
    <SideMenuSection>
      <UserMenu />
      <AddRepoForm addRepo = { addRepo } selectRepo = { selectRepo } />
      <RepoList issues={issues} repos={repos} selectRepo={selectRepo} selectedRepo={selectedRepo} />
    </SideMenuSection>
  );
};

export default connect(mapStateToProps, {
  addRepo: repoActions.addRepo,
  fetchIssues: issueActions.fetchIssues,
  selectRepo: uiActions.selectRepo,
})(RepoSection);
