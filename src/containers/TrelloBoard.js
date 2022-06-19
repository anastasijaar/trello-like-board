import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import TrelloList from '../components/TrelloList';

import Grid from '@material-ui/core/Grid';
import TrelloActionButton from '../components/TrelloActionButton';

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
    const { board } = props;
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Typography
                className={classes.title}
                variant="h3"
                component="h1">
                Hello trello-like board
            </Typography>

            <TrelloActionButton />

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
        </Grid>
    );
};

const mapStateToProps = (state) => ({
    board: state.board,
});

export default connect(mapStateToProps)(TrelloBoard);
