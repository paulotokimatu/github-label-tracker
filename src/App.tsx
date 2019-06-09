import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Grid,
} from 'semantic-ui-react';

import './App.css';
import Banner from './components/Banner/Banner';
import RepoSection from './components/RepoSection/RepoSection';
import IssueList from './components/IssueList/IssueList';
import Topbar from './components/topbar/Topbar';

import { issueActions, repoActions } from './redux/actions';

const mapStateToProps = (state: any) => {
  return {
    issues: state.issueReducer,
    repos: state.repoReducer,
  };
};

const App: React.FC<any> = ({ issues, repos, addRepo }) => {
  return (
    <div className='App'>
      <Topbar />
      <Banner />
      <Container style={{ padding: 16, paddingTop: 64 }}>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <RepoSection onClick={addRepo} repos={repos} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <IssueList issues={issues.repos} />
    </div>
  );
};

export default connect(mapStateToProps, {
  addRepo: repoActions.addRepo,
  fetchIssues: issueActions.fetchIssues,
})(App);
