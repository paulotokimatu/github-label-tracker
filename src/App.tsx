import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Grid,
} from 'semantic-ui-react';

import './App.css';
import Banner from './components/banner/Banner';
import RepoSection from './components/repoSection/RepoSection';
import ResultSection from './components/resultSection/ResultSection';
import TagSection from './components/tagSection/TagSection';
import Topbar from './components/topbar/Topbar';

import { repoActions, tagActions, issueActions } from './redux/actions';

const mapStateToProps = (state: any) => {
  return {
    issues: state.issueReducer,
    repos: state.repoReducer,
    tags: state.tagReducer,
  };
};

const App: React.FC<any> = ({ issues, repos, tags, addRepo, addTag, fetchIssues }) => {
  const tagsMerged = Array.from(tags).join(',');
  const callFetchIssues = () => {
    repos.forEach((repoName: string) => {
      fetchIssues(repoName, tagsMerged);
    });
  };

  return (
    <div className='App'>
      <Topbar />
      <Banner callFetchIssues={callFetchIssues} />
      <Container style={{ padding: 16, paddingTop: 64 }}>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <RepoSection onClick={addRepo} repos={repos} />
            </Grid.Column>
            <Grid.Column>
              <TagSection onClick={addTag} tags={tags} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <ResultSection issues={issues.repos} />
    </div>
  );
}

export default connect(mapStateToProps, {
  addRepo: repoActions.addRepo,
  addTag: tagActions.addtag,
  fetchIssues: issueActions.fetchIssues,
})(App);
