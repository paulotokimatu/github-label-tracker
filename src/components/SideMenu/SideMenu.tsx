import React from 'react';
import { connect } from 'react-redux';
import {
  Menu,
  Sidebar,
} from 'semantic-ui-react';

import { issueActions, repoActions, uiActions } from '../../redux/actions';
import AddRepoForm from './AddRepoForm/AddRepoForm';
import RepoList from './RepoList/RepoList';
import UserMenu from './UserMenu/UserMenu';

const mapStateToProps = (state: any) => {
  return {
    repos: state.repoReducer,
  };
};

const SideMenu: React.FC<any> = ({ repos, addRepo, selectRepo }) => {
  return (
    <Sidebar
      as={Menu}
      visible={true}
      vertical
      width='wide'
    >
      <UserMenu />
      <AddRepoForm addRepo={addRepo} />
      <RepoList repos={repos} selectRepo={selectRepo} />
    </Sidebar>
  );
};

export default connect(mapStateToProps, {
  addRepo: repoActions.addRepo,
  fetchIssues: issueActions.fetchIssues,
  selectRepo: uiActions.selectRepo,
})(SideMenu);
