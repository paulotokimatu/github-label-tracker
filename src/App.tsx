import React from 'react';

import './App.css';

import Alert from 'components/TopLevel/Alert';
import MainContent from './components/MainContent/MainContent';
import SideMenu from './components/SideMenu/SideMenu';

const App: React.FC<any> = () => {
  return (
    <div className='app'>
      <Alert />
      <SideMenu />
      <MainContent />
    </div>
  );
};

export default App;
