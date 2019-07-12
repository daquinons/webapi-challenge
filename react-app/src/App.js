import React from 'react';
import ProjectsList from './components/ProjectsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Projects DB Viewer</h1>
      </header>
      <div className="App-body">
        <ProjectsList />
      </div>
    </div>
  );
}

export default App;
