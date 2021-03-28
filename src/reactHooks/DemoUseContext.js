import React, {useContext} from 'react';
import {context} from './context/ContextProvider';

let arrayProduct = [
    {id: 1, name: "IPhone", price: 1000},
    {id: 2, name: "Note 10 plus", price: 2000},
    {id: 3, name: "Huawei P20", price: 3000},
];

export default function DemoUseContext(props) {

    // let store = useContext(context);
    // let cartReducer = store.cartReducer;
    let {cartReducer} = useContext(context);
    let [cart, dispatch] = cartReducer;

    //Gio hang
    const addToCart = (item) => {
        let action = {
            type: 'addToCart',
            item: item
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


