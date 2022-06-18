import React from 'react';
import { useSelector } from 'react-redux';

import TrelloList from './components/TrelloList';

import './App.css';

function App() {
    const lists = useSelector(state => state.board.lists);

    return (
        <div className="App">
            <h2 className="App__Title">Hello Trello-like board</h2>
            <div className="ListContainer">
                {lists.map(list => (
                    <TrelloList key={list.id} title={list.title} cards={list.cards} />
                ))}
            </div>
        </div>
    );
}

export default App;
