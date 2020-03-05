import React from 'react';
import './App.css';

import List from './pages/index';
import Cal from './components/caltotal';

function App() {
  return (
    <div className="App">
      <header className="title">
        <h1>CrossCount</h1>
      </header>
      <div className="blankDiv"></div>
      <List />
      <Cal />
      <div className="anotherBlank"></div>
    </div>
  );
}

export default App;
