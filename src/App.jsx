import React from 'react';
import './styles/App.css';
import Topbar from './Bank-Dashboard/Topbar';
import Sidebar from './Bank-Dashboard/Sidebar';
import Cards from './Bank-Dashboard/Cards';
import Charts from './Bank-Dashboard/Charts';


function App() {
  return (
    <div className="container">
      <Topbar />
      <Sidebar />
      <div className="main">
        <Cards />
    <Charts />
      </div>
    </div>
  );
}

export default App;
