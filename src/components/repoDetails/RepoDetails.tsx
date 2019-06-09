import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Input,
  Segment,
} from 'semantic-ui-react';

import { issueActions, labelActions } from '../../redux/actions';
import IssueLabel from '../IssueLabel/IssueLabel';
import IssueList from '../IssueList/IssueList';

const mapStateToProps = (state: any) => {
  return {
    issues: state.issueReducer,
    labels: state.labelReducer,
  };
};

const RepoDetails: React.FC<any> = ({ labels, issues, repo, fetchLabels, fetchIssues }) => {
  return (
    <Segment>
      { repo }
      <Button onClick={() => fetchLabels(repo)}>Check labels</Button>
      { labels[repo] && labels[repo].map((label: any) => {
        return <IssueLabel key={label.name} label={label} repo={repo} fetchIssuesWithLabel={fetchIssues} />;
      }) }
      <div>-----</div>
      { (issues !== undefined && issues.repos[repo]) && <IssueList issues={issues.repos[repo]} /> }
    </Segment>
  );
};

export default connect(mapStateToProps, {
  fetchIssues: issueActions.fetchIssues,
  fetchLabels: labelActions.fetchLabels,
})(RepoDetails);
