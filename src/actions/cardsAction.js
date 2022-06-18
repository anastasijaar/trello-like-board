import { ACTION_TYPES } from './index';

export const addCard = (listID, title, text) => {
    return {
        type: ACTION_TYPES.ADD_CARD,
        payload: { listID, title, text }
    };
};