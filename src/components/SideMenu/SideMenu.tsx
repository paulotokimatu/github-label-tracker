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
    repos: state.repoReducer,
    selectedRepo: state.uiReducer.selectedRepo,
  };
};

const SideMenu: React.FC<any> = ({ repos, addRepo, fetchLabels, selectRepo, selectedRepo }) => {
  return (
    <div className='side-menu'>
      <UserMenu />
      <AddRepoForm addRepo={addRepo} fetchLabels={fetchLabels} selectRepo={selectRepo} />
      <RepoList repos={repos} selectRepo={selectRepo} selectedRepo={selectedRepo} />
    </div>
    // <Menu fluid vertical tabular style={{ paddingTop: 32 }}>
    //   <UserMenu/>
    //   <AddRepoForm addRepo={addRepo} fetchLabels={fetchLabels} selectRepo={selectRepo} />
    //   <RepoList repos={repos} selectRepo={selectRepo} selectedRepo={selectedRepo} />
    // </Menu>
  );
};

export default connect(mapStateToProps, {
  addRepo: repoActions.addRepo,
  fetchIssues: issueActions.fetchIssues,
  fetchLabels: labelActions.fetchLabels,
  selectRepo: uiActions.selectRepo,
})(SideMenu);
