import React from 'react';

import LabelBadge from '../LabelBadge/LabelBadge';

const LabelList: React.FC<any> = ({ fetchIssues, selectedRepo, labels}) => {
  if (!labels.data[selectedRepo]) {
    return null;
  }

  return (
    <React.Fragment>
      {labels.data[selectedRepo].map((label: any) => {
        return <LabelBadge key={label.name} label={label} repo={selectedRepo} fetchIssuesWithLabel={fetchIssues} />;
      }) }
    </React.Fragment>
  );
};

export default LabelList;
