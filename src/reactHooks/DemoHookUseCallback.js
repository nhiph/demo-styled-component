import React, { useState, useCallback } from 'react'
import ChildUseCallback from './ChildUseCallback';

export default function DemoHookUseCallback() {

    let [like, setLike] = useState(1);

    let renderNotify = () => {
        return `Ban da tha ${like} tym`
    }

    let callbackRenderNotify = useCallback(renderNotify, [])
    // useCallBack kiem tra xem tham so 2 ([] : chua thuoc tinh can thay doi) thay doi thi tham so 1 dang ham se chay khi truyen qua child de child render lai 


    return (
        <div className="m-5">
            Like: {like} <br />
            <span style={{cursor: 'pointer', color: 'red', fontSize: '25px'}} 
            onClick={()=>{setLike(like+1)}}>Tha Tym ne</span>
            <br />
            <br />


            <small>{renderNotify()}</small>

            <br />
            <br />
            <ChildUseCallback renderNotify={callbackRenderNotify}/>
        </div>
    )
}

// Khi click setLike, state thay doi => toan bo function render lai
// => function ChildUseCallBack cung render lai => import memo vao de ngan chan render khi k can thiet
