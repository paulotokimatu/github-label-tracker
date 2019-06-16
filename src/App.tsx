import React from 'react';

import './App.css';

import MainContent from './components/MainContent/MainContent';
import SideMenu from './components/SideMenu/SideMenu';

const App: React.FC<any> = () => {
  return (
    <div className='app'>
      <SideMenu />
      <MainContent />
    </div>
  );
};

export default App;
