import React, {memo} from 'react'

function ChildUseCallback(props) {
    let title = 'cyberLearn';
    let object = {id: 1, name: "nhi"};

    console.log(title);
    console.log(object);
    console.log('re-render');

    return (
        <div>
            <small className="text-success">{props.renderNotify()}</small><br /><br/>
            <textarea></textarea><br />
            <button className="btn btn-success">Gui binh luan</button>
        </div>
    )
}

// memo giong nhu purecomponent, so sanh shallow, kieu du lieu nguyen thuy
// Vs kieu du lieu tham chieu la function hay object thi no k so sanh duoc 
export default memo(ChildUseCallback);
