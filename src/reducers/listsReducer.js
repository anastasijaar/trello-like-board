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
    }
];

const listsReducer = (state= initialState, action) => {
    switch (action.type){
        default:
            return state;
    }
};

export default listsReducer;