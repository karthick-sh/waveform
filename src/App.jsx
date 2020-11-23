import Navbar from 'containers/Navbar/Navbar';
import Workspace from 'containers/Workspace/Workspace';

import './App.scss';

function App() {
  return (
    <div className="App__container">
      <Navbar className="App__navbar"/>
      <Workspace className="App__workspace"/>
    </div>
  );
}

export default App;
