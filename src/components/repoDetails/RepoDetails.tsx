import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Input,
  Segment,
} from 'semantic-ui-react';

import { issueActions, labelActions } from '../../redux/actions';
import IssueLabel from '../IssueLabel/IssueLabel';

const mapStateToProps = (state: any) => {
  return {
    issues: state.issueReducer,
    labels: state.labelReducer,
  };
};

const RepoDetails: React.FC<any> = ({ labels, repo, fetchLabels, fetchIssues }) => {
  const newLabels = labels[repo] ? labels[repo] : [];
  return (
    <Segment>
      {repo}
      <Button onClick={() => fetchLabels(repo)}>Check labels</Button>
      {newLabels.map((label: any) => {
        return <IssueLabel key={label.name} label={label} repo={repo} fetchIssuesWithLabel={fetchIssues} />;
      }) }
    </Segment>
  );
};

export default connect(mapStateToProps, {
  fetchIssues: issueActions.fetchIssues,
  fetchLabels: labelActions.fetchLabels,
})(RepoDetails);
