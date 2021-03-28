import React, {useReducer} from 'react'

export const context = React.createContext();

let initialCart = [];

let cartReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'addToCart':{
            // Lay state ban dau, them vao action.item
            let index = state.findIndex(item => item.id === action.item.id);
            if(index != -1){
                state[index].quantity += 1;
                return [...state];
            }
            return [...state, {...action.item, quantity: 1}]
        };
        default: return state;
    }
}

// Component bao toan bo ung dung de su dung state
// Dung context bao boc tat ca component ben trong (App), tat ca the trong App co the truy xuat toi 
export default function ContextProvider(props) {

    let [cart, dispatch] = useReducer(cartReducer,initialCart)

    // STore giong nhu rootReducer quan ly state
    const store = {
        cartReducer: [cart, dispatch],
    }

    return (
        <context.Provider value={store}>
            {props.children}
        </context.Provider>
    )
}
