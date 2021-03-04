import React, { Component } from 'react';

class ChildComponents extends Component {
    constructor(props) {//Phuong thuc luon chay khi khoi tao 1 class component, 
                        //vi class component tao ra ke thua props tu React.Component, su dung thuoc tinh props qua super de ke thua tu component cha
        super(props);
        this.state = {
            number: 1
        }
        
    }

    // Phuong thuc getDerivedStateFromProps tu version 16 tro di tro thanh phuong thuc tinh k truy cap duoc con tro this
    // Dung static
    // Ham nay nhan ve (newProps, currentState) thuc thi o giai doan Mounting va Updating
    static getDerivedStateFromProps(newProps, currentState){
        console.log('getDerivedStateFromProps');
    }
    
    /* shouldComponentUpdate(newProps, newState){
    if(newProps.number !== this.props.number){
    return true;
    } 
    return false; //true goi render, false khong render
    }
    LIfeCycle nay k khuyen khich dungf, co the PureComponent nhung nen chu y */

    render() {
        console.log('renderChildComponents');
        return (
            <div>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        );
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
}

export default ChildComponents;