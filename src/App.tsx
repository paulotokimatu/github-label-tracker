import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import { changeField, fetchIssues } from './redux/actions';

const mapStateToProps = (state: any) => {
  return {
    testReducer: state.testReducer,
  };
};

const App: React.FC<any> = ({ testReducer, changeField, fetchIssues }) => {
  return (
    <div className='App'>
      Bla
      { testReducer.test }

      <button onClick={() => changeField('aaaaa')}>Change</button>
      <button onClick={() => fetchIssues()}>Fetch</button>
    </div>
  );
}

export default connect(mapStateToProps, { changeField, fetchIssues })(App);
