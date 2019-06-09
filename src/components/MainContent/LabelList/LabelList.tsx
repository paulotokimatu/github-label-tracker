import React from 'react';
import {
  Segment,
} from 'semantic-ui-react';

import LabelBadge from '../LabelBadge/LabelBadge';

const LabelList: React.FC<any> = ({ fetchIssues, repo, labels}) => {
  return (
    <Segment>
      { labels[repo] && labels[repo].map((label: any) => {
        return <LabelBadge key={label.name} label={label} repo={repo} fetchIssuesWithLabel={fetchIssues} />;
      }) }
    </Segment>
  );
};

export default LabelList;
