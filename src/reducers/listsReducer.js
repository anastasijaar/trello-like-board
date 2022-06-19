import { v4 as uuidv4 } from 'uuid';
import { ACTION_TYPES } from '../actions';

const initialState = {
    lastCardId: 0,
    lists: [
        {
            id: 'Todo',
            title: 'Todo',
            cards: [
                {
                    id: 0,
                    title: 'nesto',
                    text: 'nesto'
                },
                {
                    id: 1,
                    title: 'nesto',
                    text: 'nesto'
                }
            ]
        }, {
            id: 'In Progress',
            title: 'In Progress',
            cards: [
                {
                    id: 2,
                    title: 'nesto',
                    text: 'nesto'
                }
            ]
        }, {
            id: 'Done',
            title: 'Done',
            cards: [
                {
                    id: 3,
                    title: 'nesto',
                    text: 'nesto'
                }
            ]
        }
    ]
};

export const addCard = (state, payload) => {
    const { listID, title, text, status, assignedUser } = payload;

    const newCardId = state.lastCardId + 1;

    const newCard = {
        id: newCardId,
        title,
        text,
        status,
        assignedUser,
    };

    console.log({ newCard });
    return {
        lastCardId: newCardId,
        lists: state.lists.map(list => {
            if (list.id === listID) {
                return {
                    ...list,
                    cards: [...list.cards, newCard]
                };
            }

            return list;
        })
    };
};

export const deleteCard = (state, payload) => {
    const { listID, cardID } = payload;
    const { lists } = state;

    const listIndex = lists.findIndex(list => list.id === listID);
    const cardIndex = lists[listIndex].cards.findIndex(card => card.id === cardID);
    lists[listIndex].cards.splice(cardIndex, 1);

    return state;
};

export const updateCard = (state, payload) => {
    const { listID, cardID, title, text, status, assignedUser, parentListId } = payload;
    const { lists } = state;

    const listIndex = lists.findIndex(list => list.id === listID);
    const parentListIndex = lists.findIndex(list => list.id === parentListId);

    // Inside Same List
    if (listIndex === parentListIndex) {
        const card = lists[listIndex].cards.splice(listIndex, 1);
        lists[listIndex].cards.splice(parentListIndex, 0, ...card);
    } else {
        // Between Lists
        const currentCardIndex = lists[listIndex].cards.findIndex(card => card.id === cardID);
        const cardIndex = currentCardIndex !== -1 ? currentCardIndex : 0;
        lists[listIndex].cards[cardIndex] = { id: cardID, title, text, status, assignedUser };
    }
    return state;
};

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_CARD: {
            return addCard(state, action.payload);
        }
        case ACTION_TYPES.DELETE_CARD: {
            return deleteCard(state, action.payload);
        }
        case ACTION_TYPES.UPDATE_CARD: {
            return updateCard(state, action.payload);
        }
        default:
            return state;
    }
};

export default listsReducer;