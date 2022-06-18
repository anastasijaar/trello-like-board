import { ACTION_TYPES } from '../actions';

let listID = 2;

const initialState = [
    {
        title: "Example of list",
        id: 0,
        cards: [
            {
                id: 0,
                text: "static list and a static card1"
            },
            {
                id: 1,
                text: "static list and a static card2"
            }
        ]
    },
    {
        title: "Example of list2",
        id: 1,
        cards: [
            {
                id: 0,
                text: "static list and a static card3"
            },
            {
                id: 1,
                text: "static list and a static card4"
            },
            {
                id: 2,
                text: "static list and a static card5"
            }
        ]
    },
    {
        title: "Example of list2",
        id: 2,
        cards: [
            {
                id: 0,
                text: "static list and a static card3"
            },
            {
                id: 1,
                text: "static list and a static card4"
            },
            {
                id: 2,
                text: "static list and a static card5"
            }
        ]
    }
];

const listsReducer = (state= initialState, action) => {
    switch (action.type){
        case ACTION_TYPES.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            }
            listID += 1
            return [...state, newList];
        default:
            return state;
    }
};

export default listsReducer;