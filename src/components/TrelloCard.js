import React, { useState } from 'react';
import TrelloModal from './TrelloModal';
import { ACTION_TYPES } from '../actions';

import {
    Card,
    CardContent,
    Grid,
    Typography,
} from '@material-ui/core';

const TrelloCard = (props) => {

    const { listID, card, index, deleteCard } = props;
    const classes = styles;
    const [open, setOpen] = useState(false);

    return (
        <Grid item>
            <Card style={styles.cardContainer}>
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
                </CardContent>
            </Card>

            <TrelloModal
                listID={listID}
                card={card}
                open={open}
                setOpen={setOpen}
                type={ACTION_TYPES.UPDATE_CARD}/>
        </Grid>

    )
};

const styles = {
    cardContainer: {
        marginBottom:8
    }
}

export default TrelloCard;