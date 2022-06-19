import React from "react";

import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";


const TrelloList = (props) => {

    const { listID, title, cards } = props;

    return(
        <div style={styles.container}>
            <h4>{title}</h4>
            { cards.map((card, index) => (
                <TrelloCard
                    key={card.id}
                    card={card}
                    listID={listID}
                    index={index}/>
                ))}
                {/*<TrelloActionButton listID={listID}/>*/}
        </div>
    );
};

const styles = {
    container: {
        backgroundColor:"#dfe3e6",
        borderRadius:3,
        width:300,
        padding:8,
        marginRight:10,
        marginLeft:20
    }
}

export default TrelloList;