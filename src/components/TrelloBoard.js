import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import TrelloList from './TrelloList';

import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../actions';
import Grid from '@material-ui/core/Grid';
import TrelloActionButton from './TrelloActionButton';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 16px',
    },
    row: {
        display: 'flex',
        alignItems: 'flex-start',
        overflowX: 'scroll',
        width: '100%',
        gap: 10,
        marginTop: 10,
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
            width: 0,
            height: 0,
        },
    },
    title: {
        textAlign: 'center',
        color: '#fefefe',
        padding: 16,
    },
});

const TrelloBoard = (props) => {
    const { board, sort } = props;
    const classes = useStyles();

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        sort(source, destination, draggableId);
    };

    return (
        <Grid container className={classes.container}>
            <Typography
                className={classes.title}
                variant="h3"
                component="h1">
                Hello trello-like board
            </Typography>

            <TrelloActionButton />

            <DragDropContext onDragEnd={onDragEnd}>
                <Grid item className={classes.row}>
                    {board.lists.map(({ id, title, cards }) => (
                        <TrelloList
                            key={id}
                            listID={id}
                            title={title}
                            cards={cards}
                        />
                    ))}
                </Grid>
            </DragDropContext>
        </Grid>
    );
};

const mapStateToProps = (state) => ({
    board: state.board,
});

const mapDispatchToProps = (dispatch) => ({
    sort: (source, destination, draggableId) => dispatch(sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
    )),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrelloBoard);
