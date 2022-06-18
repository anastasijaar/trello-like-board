import { v4 as uuidv4 } from 'uuid';
import { ACTION_TYPES } from '../actions';

const initialState = {
    lists: [
        {
            id: `list-${uuidv4()}`,
            title: 'Todo',
            cards: [
                {
                    id: 0,
                    title: 'Example0',
                    text: 'static list and a static card1',
                },
            ],
        },
        {
            id: `list-${uuidv4()}`,
            title: 'In Progress',
            cards: [],
        },
        {
            id: `card-${uuidv4()}`,
            title: 'Done',
            cards: [],
        },
    ],
};

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_CARD: {
            const { listID, title, text } = action.payload;

            const newCard = {
                id: 0,
                title,
                text,
            };

            return {
                lists: state.lists.map(list => {
                    if (list.id === listID) {
                        return {
                            ...list,
                            cards: [...list.cards, newCard],
                        };
                    }

                    return list;
                }),
            };
        }
        default:
            return state;
    }
};

export default listsReducer;