import React from 'react';
import { Grid } from 'semantic-ui-react';

import './App.css';

import MainContent from './components/MainContent/MainContent';
import SideMenu from './components/SideMenu/SideMenu';

const App: React.FC<any> = () => {
  return (
    <div className='App' style={{ paddingLeft: 64, paddingRight: 64 }}>
      <Grid divided='vertically'>
        <Grid.Row>
          <Grid.Column width={6}>
            <SideMenu />
          </Grid.Column>
          <Grid.Column width={10}>
            <MainContent />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default App;
