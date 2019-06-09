import React from 'react';

import './App.css';

import MainContent from './components/MainContent/MainContent';
import SideMenu from './components/SideMenu/SideMenu';

const App: React.FC<any> = () => {
  return (
    <div className='App'>
      <SideMenu />
      <MainContent />
      {/* <Container style={{ paddingTop: 64 }}>
        <RepoSection onClick={addRepo} repos={repos} />
      </Container> */}
      {/* <Container style={{ padding: 16, paddingTop: 64 }}>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <RepoSection onClick={addRepo} repos={repos} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container> */}
    </div>
  );
};

export default App;
