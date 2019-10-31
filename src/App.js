import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      {/* Links Goes Here */}
      <Sidebar/>
      <main>
        {/* Main Content goes here */}
      </main>
    </div>
  );
}

export default App;
