import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import TrelloModal from './TrelloModal';
import { ACTION_TYPES, deleteCard } from '../actions';
import { Draggable } from 'react-beautiful-dnd';

import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    card: {
        marginBottom: 8,
        transition: 'all .4s',
    },
    title: {
        fontWeight: 'bold',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
    }
});

const TrelloCard = (props) => {
    const classes = useStyles();
    const { listID, card, index } = props;

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const handleDeleteCard = () => {
        dispatch(deleteCard(listID, card.id));
    };

    return (
        <Grid item>
            <Draggable
                draggableId={String(card.id)}
                index={index}>
                {(provided) => (
                    <Grid
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    variant="h6"
                                    component="h4"
                                    gutterBottom>
                                    {card.title} - #{card.id}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    component="p"
                                    gutterBottom>
                                    {card.text}
                                </Typography>

                                <Typography
                                    className={classes.title}
                                    variant="body2"
                                    component="p"
                                    gutterBottom>
                                    {card.status}
                                </Typography>

                                <Typography
                                    className={classes.title}
                                    variant="body2"
                                    component="p"
                                    gutterBottom>
                                    {card.assignedUser}
                                </Typography>

                                <CardActions className={classes.buttons}>
                                    <Button
                                        color="primary"
                                        size="small"
                                        startIcon={<EditIcon/>}
                                        onClick={() => setOpen(true)}
                                    >
                                        Edit
                                    </Button>

                                    <Button
                                        color="secondary"
                                        size="small"
                                        startIcon={<DeleteIcon/>}
                                        onClick={handleDeleteCard}
                                    >
                                        Delete
                                    </Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Draggable>

            <TrelloModal
                listID={listID}
                card={card}
                open={open}
                setOpen={setOpen}
                type={ACTION_TYPES.UPDATE_CARD}/>
        </Grid>
    );
};

export default TrelloCard;