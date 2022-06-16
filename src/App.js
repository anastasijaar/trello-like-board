import React from 'react';
import TrelloList from "./components/TrelloList";
import {connect} from "react-redux"

import './App.css';

function App({lists}) {
    return (
        <div className="App">
            <h2>Hello Trello-like board</h2>
            <div style={styles.listsContainer}>
                {lists.map(list => (
                    <TrelloList key={list.id} title={list.title} cards={list.cards}/>
                ))}
            </div>
        </div>
    );
}

const styles = {
    listsContainer: {
        display: "flex",
        flexDirection: "row"
    }
};

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(App);
