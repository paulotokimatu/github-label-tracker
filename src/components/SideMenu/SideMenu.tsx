import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
} from 'semantic-ui-react';

import { issueActions, labelActions, repoActions, uiActions } from '../../redux/actions';
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

const SideMenu: React.FC<any> = ({ issues, repos, addRepo, fetchLabels, selectRepo, selectedRepo }) => {
  return (
    <div className='side-menu'>
      {/* <UserMenu /> */}
      <AddRepoForm addRepo={addRepo} fetchLabels={fetchLabels} selectRepo={selectRepo} />
      <RepoList issues={issues} repos={repos} selectRepo={selectRepo} selectedRepo={selectedRepo} />
    </div>
  );
};

export default connect(mapStateToProps, {
  addRepo: repoActions.addRepo,
  fetchIssues: issueActions.fetchIssues,
  fetchLabels: labelActions.fetchLabels,
  selectRepo: uiActions.selectRepo,
})(SideMenu);
