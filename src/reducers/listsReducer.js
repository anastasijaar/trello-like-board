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
        default:
            return state;
    }
};

export default listsReducer;