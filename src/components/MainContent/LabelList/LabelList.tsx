import React from 'react';
import {
  Button,
  Segment,
} from 'semantic-ui-react';

import LabelBadge from '../LabelBadge/LabelBadge';

const LabelList: React.FC<any> = ({ fetchLabels, fetchIssues, selectedRepo: selectedRepo, labels}) => {
  if (labels === undefined || !labels[selectedRepo]) {
    console.log('test')
    return <Button onClick={() => fetchLabels(selectedRepo)}>Check labels</Button>;
  }

  return (
    <Segment>
      <div className='labels-header'>
        <h3>{labels[selectedRepo].length} Labels</h3>
        <Button circular icon='refresh' onClick={() => fetchLabels(selectedRepo)} />
      </div>
      { labels[selectedRepo] && labels[selectedRepo].map((label: any) => {
        return <LabelBadge key={label.name} label={label} repo={selectedRepo} fetchIssuesWithLabel={fetchIssues} />;
      }) }
    </Segment>
  );
};

export default LabelList;
