import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import {
    Button,
    Modal,
    Grid,
    TextField,
    IconButton, InputLabel, Select, MenuItem, FormControl,
} from '@material-ui/core';

import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import CloseIcon from '@material-ui/icons/Close';

import {
    ACTION_TYPES,
    addCard,
    updateCard,
    deleteCard
} from '../actions';
import { AssignedUsers, ListStatus } from '../constants';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        maxWidth: '90vw',
        backgroundColor: '#fff',
        padding: 16,
    },
    textfield: {
        marginBottom: 16,
        width: 220
    },
    grid: {
        display: 'flex',
        paddingTop: 16
    },
    closeButton: {
        position: 'absolute',
        right: 8,
        top: 8,
    },
});

const TrelloModal = (props) => {
    const classes = useStyles();
    const { open, setOpen, card, type, listID: fromListId } = props;
    const cardTitle = card.title;
    const cardText = card.text;
    const cardStatus = card.status;
    const user = card.assignedUser;
    const cardID = card.id;

    const [title, setTitle] = useState(cardTitle ?? '');
    const [text, setText] = useState(cardText ?? '');
    const [status, setStatus] = useState(cardStatus ?? '');
    const [assignedUser, setAssignedUser] = useState(user ?? '');
    const [toListId, setToListId] = useState(fromListId ?? '');

    const handleCloseModal = () => {
        setOpen(false);
    };

    const handleAddCard = () => {
        const { addCard } = props;

        if (title && text) {
            addCard(toListId, title, text, status, assignedUser);
            handleCloseModal();
            setTitle('');
            setText('');
            setStatus('');
            setAssignedUser('');
        }
    };

    const handleUpdateCard = () => {
        const { updateCard } = props;
        updateCard(fromListId, toListId, cardID, title, text, status, assignedUser);
        handleCloseModal();
    };

    const handleDeleteCard = () => {
        const { deleteCard } = props;
        deleteCard(toListId, cardID);
    };

    const handleSelectStatus = (event) => {
        setStatus(event.target.value);
        setToListId(event.target.value);
    };

    return (
        <Modal
            open={open}
            onClose={handleCloseModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
            <Grid
                container
                direction="column"
                className={classes.root}>
                <TextField
                    className={classes.textfield}
                    placeholder="Enter a card title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    error={title === ''}
                    label="Title"
                    helperText={title === '' ? 'Enter a card title!' : ' '}/>

                <IconButton
                    className={classes.closeButton}
                    onClick={handleCloseModal}>
                    <CloseIcon/>
                </IconButton>

                <TextField
                    placeholder="Enter a card text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    helperText={text === '' ? 'Enter a card text!' : ' '}
                    error={text === ''}
                    label="Text"
                    variant="outlined"
                    maxRows={10}
                    multiline
                    fullWidth/>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Status"
                        onChange={handleSelectStatus}
                    >
                        {Object.keys(ListStatus).map(key => (
                            <MenuItem key={key} value={ListStatus[key]}>
                                {ListStatus[key]}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="user-select-label">Select user</InputLabel>
                    <Select
                        labelId="user-select-label"
                        id="user-select-label"
                        value={assignedUser}
                        label="Assigned User"
                        onChange={(event) => setAssignedUser(event.target.value)}
                    >
                        {Object.keys(AssignedUsers).map(key => (
                            <MenuItem key={key} value={AssignedUsers[key]}>
                                {AssignedUsers[key]}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    className={classes.grid}>
                    <Button
                        onClick={handleDeleteCard}
                        variant="text"
                        color="secondary"
                        startIcon={<DeleteIcon/>}
                        disabled={type === ACTION_TYPES.ADD_CARD}>
                        Delete
                    </Button>

                    <Grid item>
                        <Button
                            onClick={handleCloseModal}
                            variant="text"
                            startIcon={<CancelIcon/>}>
                            Cancel
                        </Button>

                        <Button
                            onClick={type === ACTION_TYPES.UPDATE_CARD ? handleUpdateCard : handleAddCard}
                            variant="text"
                            color="primary"
                            startIcon={<SaveIcon/>}
                            disabled={title === '' || text === '' || status === '' || assignedUser === ''}>
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Modal>
    );
};

const mapDispatchToProps = {
    addCard,
    updateCard,
    deleteCard
};

export default connect(null, mapDispatchToProps)(TrelloModal);