import { deepCopy } from '../utils';
import { v4 as uuidv4 } from 'uuid';

export const addCard = (state, payload) => {
    const { listID, title, text } = payload;

    const newCard = {
        id: `card-${uuidv4()}`,
        title,
        text
    };

    return {
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