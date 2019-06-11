import React from 'react';
import {
  Button,
  Segment,
} from 'semantic-ui-react';

import LabelBadge from '../LabelBadge/LabelBadge';

const NoContent: React.FC<any> = () => {
  return (
    <Segment>
      a
      {/* <Button onClick={() => fetchLabels(selectedRepo)}>Check labels</Button>
      {labels[selectedRepo] && labels[selectedRepo].map((label: any) => {
        return <LabelBadge key={label.name} label={label} repo={selectedRepo} fetchIssuesWithLabel={fetchIssues} />;
      })} */}
    </Segment>
  );
};

export default NoContent;
