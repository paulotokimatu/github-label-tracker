import React from 'react';
import {
  Label,
} from 'semantic-ui-react';

const LabelBadge: React.FC<any> = ({ repo, label, fetchIssuesWithLabel }) => {
  return (
    <Label as='a' style={{ backgroundColor: '#' + label.color }} onClick={() => fetchIssuesWithLabel(repo, label.name)}>
      {label.name}
    </Label>
  );
};

export default LabelBadge;
