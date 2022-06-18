import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const TrelloCard = ({card}) => {
    return (
        <Card style={styles.cardContainer}>
            <CardContent>
                <Typography variant="h4" gutterBottom>
                    {card.title}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                    {card.text}
                </Typography>
            </CardContent>
        </Card>
    )
};

const styles = {
    cardContainer: {
        marginBottom:8
    }
}

export default TrelloCard;