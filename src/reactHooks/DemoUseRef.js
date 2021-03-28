import React, {useState, useRef} from 'react'

export default function DemoUseRef(props) {

    let inputUserName = useRef(null);
    let inputPassword = useRef(null);

    let userName = '';

    let [userLogin, setUserLogin] = useState({});
    const handleLogin = () => {
        setUserLogin({
            userName: userName
        })
    }

    return (
        <div className="container">
            {/* <h3>Login</h3> */}
            <div className="form-group">
                <h3>Username</h3>
                <input ref={inputUserName} name="userName" className="form-control"></input>
            </div>
            <div className="form-group">
                <h3>Password</h3>
                <input ref={inputPassword} name="password" className="form-control"></input>
            </div>
            <div className="form-group">
                <button 
                    onClick={()=>{handleLogin()}}
                    className="btn btn-success">Login</button>
            </div>
        </div>
    )
}
