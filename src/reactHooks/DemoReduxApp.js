import React,{useState}from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';


export default function DemoReduxApp(props) {

    // UseSeclector thay cho mapstatetoprops
    let comments = useSelector(state => state.FacebookReducer.comments);
    // lay ham Dispatch tu  useDispatch de gui gia tri len reducer
    let dispatch = useDispatch();

    // Lay thong tin ng dung nhap vao
    let [userComment, setUserComment] = useState({
        name: '',
        content: '',
        avatar: ''
    });

    // Lay thong tin ng dung nhap vao
    const handleChange = (e) => {
        let {value, name} = e.target;

        setUserComment({
            ...userComment, //clone objectt ra, neu khong se mat di cay keyvalue object ban dau
            [name]: value
        })
    }

    // Submit thong tin ng dung len reducer
    const handleComment = (e) => {
        e.preventDefault();

        userComment = {...userComment, avatar: `https://i.pravatar.cc/150?u=${userComment.name}`}
        
        let action= {
            type: 'add_comment',
            userComment: userComment
        }
        dispatch(action)
    }

    return (
        <div className="container">
               FACEBOOK APP
               <div className="card text-left">
                    <div className="card-header">
                        {comments.map((comment, index) => {
                            return <div className="row" key={index}>
                            <div className="col-1">
                                <img src={comment.avatar} style={{height: 50}}/>
                            </div>
                            <div className="col-11">
                                <h6>{comment.name}</h6>
                                <p>{comment.content}</p>
                            </div>
                        </div>
                        })}
                        
                    </div>
                    <form onSubmit={handleComment} className="card-body">
                        <div className="form-group">
                        <h4 className="card-title">Name</h4>
                       <input className="form-control" name="name" onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                        <h4 className="card-title">Content</h4>
                       <input className="form-control" name="content" onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                       <button className="btn btn-success">Send</button>
                        </div>
                    </form>
               </div>
            </div>
    )
}


