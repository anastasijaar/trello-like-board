import { v4 as uuidv4 } from 'uuid';
import { ACTION_TYPES } from '../actions';
import { addCard } from '../utils';

const initialState = [
    {
        id: `list-${uuidv4()}`,
        title: "TO DO",
        cards: [
            {
                id: `card-${uuidv4()}`,
                title: "Example0",
                text: "static list and a static card1"
            },
            {
                id: `card-${uuidv4()}`,
                title: "Example1",
                text: "static list and a static card2"
            }
        ]
    },
    {
        id: `list-${uuidv4()}`,
        title: "IN PROGRESS",
        cards: [
            {
                id: `card-${uuidv4()}`,
                title: "Example2",
                text: "static list and a static card3"
            },
            {
                id: `card-${uuidv4()}`,
                title: "Example3",
                text: "static list and a static card4"
            },
            {
                id: `card-${uuidv4()}`,
                title: "Example4",
                text: "static list and a static card5"
            }
        ]
    },
    {
        id: `card-${uuidv4()}`,
        title: "DONE",
        cards: [
            {
                id: `card-${uuidv4()}`,
                title: "Example5",
                text: "static list and a static card3"
            },
            {
                id: `card-${uuidv4()}`,
                title: "Example6",
                text: "static list and a static card4"
            },
            {
                id: `card-${uuidv4()}`,
                title: "Example7",
                text: "static list and a static card5"
            }
        ]
    }
];

const listsReducer = (state= initialState, action) => {
    switch (action.type){
        case ACTION_TYPES.ADD_CARD: {
            return addCard(state, action.payload);
        }
    }
};

export default listsReducer;