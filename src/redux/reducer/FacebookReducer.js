const stateDEfault = {
    comments: [
        {name: "Yone", content: 'Hi! Yasou', avatar: `https://i.pravatar.cc/150?u=yone`},
        {name: "Yasuo", content: 'Great!', avatar: `https://i.pravatar.cc/150?u=yasuo`},
    ],

}

const FacebookReducer = (state = stateDEfault, action) => {
    console.log(action);

    switch (action.type) {
        case 'add_comment':
            state.comments = [...state.comments, action.userComment];
            return {...state};
            
    
        default:
            return {...state};
    }
    return {...state};
}

export default FacebookReducer;