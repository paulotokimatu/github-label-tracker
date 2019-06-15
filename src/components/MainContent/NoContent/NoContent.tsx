import React from 'react';
import {
  Button,
  Segment,
} from 'semantic-ui-react';

import LabelBadge from '../LabelBadge/LabelBadge';

const NoContent: React.FC<any> = () => {
  return (
    <div className='no-content-page'>
      <Segment className='no-content-panel'>
        <h1>HelpWanted App</h1>
        <p>Input a GitHub repository name</p>
      </Segment>
      <div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default NoContent;
