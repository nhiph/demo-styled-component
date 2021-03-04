import React, {useState, useEffect} from 'react'
import ChildUseEffect from './ChildUseEffect';

export default function DemoUseEffect() {

    let [number, setNumber] = useState(1);
    let [like, setLike] = useState(1);

    // Ham chay sau khi UI render, thay cho didMount va didUpdate trong moi trg hop
    // useEffect(()=>{
    //     console.log('didmount');
    //     console.log('didupdate');
    // })


    //Cach viet thay the cho componentDidmount, tham so 2 la mang rong
    useEffect(()=>{
        console.log('didmount');
    },[]) 

    // Cach viet thay the componentDidUpdate
    useEffect(()=> {
        console.log('didmount 2');
        return () => {
            console.log('willUnMount') //doan lenh return se chay khi component nay xoa hoan toan khoi giao dien, binh thuong se k tu chay
        }
    },[number]) // neu muon 1 trong 2 thay doi didUpdate deu chay thi viet [number, like]

    // NUmber la gia tri sau render neu bi thay doi thi useEffect se chay, 
    // k lien quan state khac vi du state like thay doi ma state number giu nguyen thi k chay

    const handleIncrease = () => {
        let newNumber = number +1;
        setNumber(newNumber);
    }

    return (
        <div>
            <button className="btn btn-warning" onClick={() => {setLike(like+ 1)}}>Like: {like}</button>
            <div className="card text-left">
            <img  style={{height: '400px', width: '600px'}} className="card-img-top" src="https://cdn.hit.vn/doisongphapluat/6714f2fa-a873-4540-6ced-0d3c0a0057bf/d18dc72e-768e-406c-4c8e-b5dc0683f759.jpg" alt=""/> 
            <div className="card-body">
                <h4 className="card-title">Picture</h4>
                <p style={{color: 'red'}}> like: {number} </p>
            </div>

            <button className="btn btn-success" onClick={handleIncrease}>+</button>

            {like === 1 ? <ChildUseEffect /> : ''}
            </div>
        </div>
    )
}
