import Icon from '@mui/material/Icon';
import React, { useState } from 'react';
import TrelloModal from "./TrelloModal";
import Modal from "./Modal";

const TrelloActionButton = (props) => {
    const {cardsLength} = props;

    const buttonText = cardsLength > 0 ? 'Add another card' : 'Add a card';
    const buttonTextOpacitity = "0.5";
    const buttonTextColor = "inherit";
    const buttonTextBackground = "inherit";
    const {open, handleOpenModal} = TrelloModal();

    return(
        <div
            onClick={handleOpenModal}
            style={
            {
                ...styles.openFormButtonGroup,
                opacity: buttonTextOpacitity,
                color: buttonTextColor,
                backgroundColor: buttonTextBackground
            }
        }>
            <Icon>add</Icon>
            <p>{buttonText}</p>
            <Modal
                open={open}
                setOpen={()=>handleOpenModal()}
            />
        </div>
    )

}


const styles = {
    openFormButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    }
}

export default TrelloActionButton;