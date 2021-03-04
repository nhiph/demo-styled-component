import React, { Component } from 'react';
import ChildComponents from './ChildComponents';

class LifeCycleReact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number : 1
        }
    }
    
    
    // Duoc goi khi component duoc render ra UI(DOM, giao dien cua App)
    static getDerivedStateFromProps(newProps, currentState){
        console.log('getDerivedStateFromProps');
    }


    // Duoc goi khi setState hoac Props
    shouldComponentUpdate(){
        return true; //true goi render, false khong render
    }

    render() {
        console.log('renderParent');
        return (
            <div>
                <h3>Parent Component</h3>
                <span>Number: {this.state.number}</span>
                <button 
                    className="btn btn-success" 
                    onClick={()=>{
                        this.setState({
                            number: this.state.number + 1
                        })
                    }}
                >+</button>
                {/* Khi state.number !== 1, <ChildComponents> se khong render => lifeCycle of Child chay componentWillUnmount */}
                {this.state.number === 1 ? <ChildComponents /> : ''}
            </div>
        );
    }


    // DUoc goi sau khi render 1 lan duy nhat trong trang thai Mounting
    componentDidMount(){
        console.log('componentDidMount');
    }

    // Trang THai mounting k goi, chi goi khi thay doi props / state (setState, props tu Store thay doi)
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate');
    }
}

export default LifeCycleReact;