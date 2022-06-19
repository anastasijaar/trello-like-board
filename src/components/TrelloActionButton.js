import React, { useState } from 'react';

import AddIcon from '@material-ui/icons/Add';
import { Button, Grid } from '@material-ui/core';
import { ACTION_TYPES } from '../actions';

import TrelloModal from './TrelloModal';

const TrelloActionButton = ({ listID }) => {
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(true);
    };

    return (
        <Grid item>
            <Button
                color="primary"
                variant="contained"
                startIcon={<AddIcon />}
                onMouseDown={handleOpenModal}
            >
                Create Issue
            </Button>

            <TrelloModal
                listID={listID}
                card={{}}
                open={open}
                setOpen={setOpen}
                type={ACTION_TYPES.ADD_CARD}
            />
        </Grid>
    );

};

export default TrelloActionButton;