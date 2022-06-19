import { ACTION_TYPES } from './index';

export const addCard = (listID, title, text, status, assignedUser) => {
    return {
        type: ACTION_TYPES.ADD_CARD,
        payload: { listID, title, text, status, assignedUser }
    };
};

export const deleteCard = (listID, cardID) => {
    return {
        type: ACTION_TYPES.DELETE_CARD,
        payload: { listID, cardID }
    };
};

export const updateCard = (fromListId, toListId, cardID, title, text, status, assignedUser) => {
    return {
        type: ACTION_TYPES.UPDATE_CARD,
        payload: { fromListId, toListId, cardID, title, text, status, assignedUser }
    };
};