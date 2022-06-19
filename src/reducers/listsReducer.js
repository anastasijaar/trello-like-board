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
                    title: 'Title 1',
                    text: 'Text 1',
                    status: 'Todo',
                    assignedUser: 'AJ',
                },
            ]
        }, {
            id: 'In Progress',
            title: 'In Progress',
            cards: []
        }, {
            id: 'Done',
            title: 'Done',
            cards: []
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
    const { lists: stateLists } = state;
    const lists = [...stateLists];

    const listIndex = lists.findIndex(list => list.id === listID);
    const cardIndex = lists[listIndex].cards.findIndex(card => card.id === cardID);
    lists[listIndex].cards.splice(cardIndex, 1);

    return {
        ...state,
        lists,
    };
};

export const updateCard = (state, payload) => {
    const { fromListId, toListId, cardID, title, text, status, assignedUser } = payload;
    const { lists: stateLists } = state;
    // Create a copy of the lists state because state shouldn't be changed!
    const lists = [...stateLists];

    // The index from where we want to update a card
    const fromListIndex = lists.findIndex(list => list.id === fromListId);

    // The index where we want to move a card
    const toListIndex = lists.findIndex(list => list.id === toListId);

    const cardIndex = lists[fromListIndex].cards.findIndex(card => card.id === cardID);
    const newCard = { id: cardID, title, text, status, assignedUser };

    // Inside Same List
    if (fromListIndex === toListIndex) {
        lists[fromListIndex].cards[cardIndex] = newCard;
    } else {
        // Between Lists
        lists[fromListIndex].cards.splice(cardIndex, 1); // Deletes card from the current list
        lists[toListIndex].cards.push(newCard); // Append card to the new list
    }

    return {
        ...state,
        lists,
    };
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