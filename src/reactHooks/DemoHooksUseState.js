import React, {useState} from 'react';

export default function DemoHooksUseState(props) {
    // (1): this.state={}
    // (2): this.setState(newState);
    //tuple
    let [state, setState] = useState({like: 0})
    console.log(state); // vi setState chay lai nen xem state moi o day
    
    const handleLike = () => {
        // Like tang 1 va setState
        setState({
            like: state.like + 1
        })
    }
    // CHu y, khi goi ham setState lai, thi ca function DemoHooksUseState duoc goi lai
    return (
        <div className="container m-5">
            <div className="card text-left">
            <img  style={{height: '400px', width: '600px'}} className="card-img-top" src="https://cdn.hit.vn/doisongphapluat/6714f2fa-a873-4540-6ced-0d3c0a0057bf/d18dc72e-768e-406c-4c8e-b5dc0683f759.jpg" alt=""/> 
            <div className="card-body">
                <h4 className="card-title">Picture</h4>
                <p style={{color: 'red'}}>{state.like} </p>
            </div>
            <button className="btn btn-danger" onClick={handleLike}>Like</button>
            </div>
        </div>
        
    )
}
