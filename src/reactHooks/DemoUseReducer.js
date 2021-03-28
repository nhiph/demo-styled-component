import React, {useReducer} from 'react'

const initialCart = [
    {id: 1, name: "Iphone", price: 1000, quantity: 1}
]

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'addToCart':{
            let cartUpdate = [...state];
            // Lay state ban dau, them vao action.item
            let index = cartUpdate.findIndex(item => item.id === action.item.id);
            if(index !== -1){
                cartUpdate[index].quantity += 1;
            }else{
                const itemCart = {...action.item, quantity: 1};
                cartUpdate.push(itemCart);
            }
            return cartUpdate;

        }
    }

    return [...state];
}

export default function DemoUseReducer() {

    // cart, state quan ly; dispatch: ham thay doi state
    let [cart, dispatch] = useReducer(cartReducer,initialCart)

    let arrayProduct = [
        {id: 1, name: "IPhone", price: 1000},
        {id: 2, name: "Note 10 plus", price: 2000},
        {id: 3, name: "Huawei P20", price: 3000},
    ]

    const addToCart = (item) => {
        let action = {
            type: 'addToCart',
            item
        }
        dispatch(action)
    }

    return (
        <div className="container">
        <div className="row">
            {arrayProduct.map((item, index) => {
                return <div className="col-4" key={index}>
                    <div className="card text-left">
                        <img className="card-img-top" src={'https://picsum.photos/200/200'} alt={index}/>
                        <div className="card-body">
                            <h4 className="card-title">{item.name}</h4>
                            <p className="card-text">{item.price}</p>
                            <button
                                onClick={() => {addToCart(item)}} 
                                className="btn btn-success">Add to cart</button>
                        </div>                    
                    </div>
                </div>
            })}
        </div>
        <h3>Gio hang</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map((product, index) => {
                        return <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.quantity*product.price}</td>
                            <td><button className="btn btn-danger">Xoa</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
            
        </div>
    )
}
