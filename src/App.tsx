import React from 'react';
import { Grid, Container } from 'semantic-ui-react';

import './App.css';

import MainContent from './components/MainContent/MainContent';
import SideMenu from './components/SideMenu/SideMenu';

const App: React.FC<any> = () => {
  return (
    <div className='app'>
      <SideMenu />
      <MainContent />
      {/* <Grid divided='vertically'>
        <Grid.Row>
          <Grid.Column width={6}>
            <SideMenu />
          </Grid.Column>
          <Grid.Column width={10}>
            <MainContent />
          </Grid.Column>
        </Grid.Row>
      </Grid> */}
    </div>
  );
};

export default App;
