import React from 'react';
import { connect } from 'react-redux';
import {
  Menu,
} from 'semantic-ui-react';

import { issueActions, repoActions, uiActions, labelActions } from '../../redux/actions';
import AddRepoForm from './AddRepoForm/AddRepoForm';
import RepoList from './RepoList/RepoList';
import UserMenu from './UserMenu/UserMenu';

const mapStateToProps = (state: any) => {
  return {
    repos: state.repoReducer,
    selectedRepo: state.uiReducer.selectedRepo,
  };
};

const SideMenu: React.FC<any> = ({ repos, addRepo, fetchLabels, selectRepo, selectedRepo }) => {
  return (
    <Menu fluid vertical tabular style={{ paddingTop: 32 }}>
      <UserMenu/>
      <AddRepoForm addRepo={addRepo} fetchLabels={fetchLabels} selectRepo={selectRepo} />
      <RepoList repos={repos} selectRepo={selectRepo} selectedRepo={selectedRepo} />
    </Menu>
  );
};

export default connect(mapStateToProps, {
  addRepo: repoActions.addRepo,
  fetchIssues: issueActions.fetchIssues,
  fetchLabels: labelActions.fetchLabels,
  selectRepo: uiActions.selectRepo,
})(SideMenu);
