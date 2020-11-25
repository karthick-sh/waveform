import React from 'react';

import Navbar from 'containers/Navbar/Navbar';
import Workspace from 'containers/Workspace/Workspace';
import HomePage from 'containers/HomePage/HomePage';


import './App.scss';

const App = () => {
  return (
    <div className="App__container">
      {/* <Navbar className="App__navbar"/>
      <Workspace className="App__workspace"/> */}
      <HomePage />
    </div>
  );
}

export default App;
