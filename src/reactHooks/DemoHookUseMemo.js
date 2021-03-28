import React, {useState, useMemo} from 'react'
import ChildUseMemo from './ChildUseMemo';

export default function DemoHookUseMemo(props) {

    let [like, setLike] = useState(1);
    let cart = [
        {id: 1, name: "iphone", price: 1000},
        {id: 2, name: "HTC phone", price: 2000},
        {id: 3, name: "LG phone", price: 3000}
    ];
    const cartMemo = useMemo(() => cart, []);

    return (
        <div className="m-5">
            like: {like}
            <br />
            <span style={{cursor: 'pointer', color: 'red'}}
            onClick={()=>{setLike(like+1);
            }}>
            Tym
            </span>
            <br />
            <br />
            <ChildUseMemo cart={cartMemo}/>
        </div>
    )
}

/* Khi nhan tym, state like thay doi, ca function chay lai
=> Khai bao lai cart, ban dau array, khai bao lai => array moi
childUseMemo nhan biet gia tri props cart truyen vao thay doi 
=> render
Vay can dung useMemo de luu lai array cart ban dau va chi render lai khi tham so state phia sau thay doi
*/
