import React from 'react';
import TrelloList from "./components/TrelloList";
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Hello Trello-like board</h2>
        <TrelloList title="test"/>
    </div>
  );
}

export default App;
