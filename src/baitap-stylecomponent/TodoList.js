import React, { Component } from 'react';
import { Container } from '../components/Container';
import {ThemeProvider} from 'styled-components';
import {ToDoListDarkTheme} from '../theme/ToDoListDarkTheme';
import {ToDoListLightTheme} from '../theme/ToDoListLightTheme';
import {ToDoListPrimaryTheme} from '../theme/ToDoListPrimaryTheme';
import {Dropdown} from '../components/Dropdown';
import {Heading2, Heading3} from '../components/Heading';
import {TextField, Label, Input} from '../components/TextField';
import {Button} from '../components/Button';
import {Table, Tr, Td, Th, Thead, Tbody} from '../components/Table';
import {connect} from 'react-redux';
import {addTaskAction, changeThemeAction, doneTaskAction, deleteTaskAction, editTaskAction, updateTaskAction} from '../redux/actions/types/ToDoListActions';
import {arrTheme} from '../theme/ThemeManager';

class TodoList extends Component {

    state = {
        taskName: '',
        disabled: true
    }


    renderTaskToDo = () => {
        return this.props.taskList.filter(task=>!task.done).map((task, index) => {
            return <Tr key={index}>
            <Th style={{verticalAlign: 'middle'}}>{task.taskName}</Th>
            <Th className="text-right">
                <Button 
                    onClick={()=>{
                        this.setState({
                            disabled: false
                        },()=>{
                            this.props.dispatch(editTaskAction(task))
                        })
                    }}
                    className="ml-1"><i class="fa fa-edit"></i>
                </Button>
                <Button 
                    onClick={()=>{
                        this.props.dispatch(doneTaskAction(task.id))
                    }}
                    className="ml-1">
                    <i class="fa fa-check"></i>
                </Button>
                <Button
                    onClick={()=>{
                        this.props.dispatch(deleteTaskAction(task.id))
                    }} 
                    className="ml-1"><i class="fa fa-trash"></i>
                </Button>
            </Th>
        </Tr>
        })
    }

    renderTaskCompleted = () => {
        return this.props.taskList.filter(task=>task.done).map((task, index)=>{
            return <Tr key={index}>
            <Th style={{verticalAlign: 'middle'}}>{task.taskName}</Th>
            <Th className="text-right">
                <Button
                    onClick={()=>{
                            this.props.dispatch(deleteTaskAction(task.id))
                    }} 
                    className="ml-1"><i class="fa fa-trash"></i>
                </Button>
            </Th>
        </Tr>
        })
    }

    renderTheme = () => {
        return arrTheme.map((theme, index)=>{
            return <option value={theme.id}>{theme.name}</option>
        })
    }

    /* Cach 1 VERSION <16.4: THem lifecycle nhan props moi thuc thi truoc khi render, chi khi thay doi Props
        Khi setState o TextField -> binding UI ->Edit -> setState ->Stop(k chay lai componentWillReceiveProps, 
        chi chajy 1 lan )
    vi du TextField rong, click edit task2
        + this.props: rong
        + newProps: task2
    vi du TextField task2, click edit task4
        + this.props: task2
        + newProps: task4
    */
    /*componentWillReceiveProps(newProps){
        console.log('thisprops: ', this.props);
        console.log('newProps: ', newProps);
        this.setState({
            taskName: newProps.taskEdit.taskName
        })
    }*/

    /* Cach 2 VERSION 16 tro len: ham nay cung chay truoc khi render, khi thay doi state hoac props 
    Ham nay tra ve 
    props moi(newProps). Props cu (this.props) k the truy xuat duoc
    vi ham nay static k dungf duoc con tro this.
    currentState: ung vs state hien tai this.state
    hoac tra ve state moi (this.state)
    */
//    static getDerivedStateFromProps(newProps, currentState){
//         let newState = {...currentState, taskName: newProps.taskEdit.taskName};
//         return newState;
//         /* Luc nay, du lieu se duoc gan vao state component
//         Tuy nhien, ngay khi nhap lieu tren trg TextField, setState lai duoc goi
//         setState duoc goi -> getDerivedStateFromProps run, lay props cu redux gan vao state => bi dung
//         */
//     }
    // Chua su dung theo cach 2 duoc

    render() {
        return (
            <ThemeProvider theme={this.props.themeToDoList}>
                <Container className="w-50">
                    <Dropdown
                        onChange={(e) => {
                            let {value}=e.target;
                            this.props.dispatch(changeThemeAction(value))
                        }}>
                        {this.renderTheme()}
                        {/* <option>Dark theme</option>
                        <option>Light theme</option>
                        <option>Primary theme</option> */}
                    </Dropdown>
                    <Heading3>To do list</Heading3>
                    <TextField
                        name="taskName" 
                        label="Task name"
                        value = {this.state.taskName} 
                        onChange={(e)=>{
                            this.setState({
                                taskName: e.target.value
                            })
                        }}
                    /> 
                    <Button 
                        className="ml-2"
                        onClick={()=>{
                            // Lay thong tin nguoi dung nhap vao tu input
                            let {taskName} = this.state;
                            // tao ra 1 task object
                            let newTask = {
                                id: Date.now(),
                                taskName: taskName,
                                done: false
                            };
                            // dua task len redux store qua dispatch
                            this.props.dispatch(addTaskAction(newTask))

                        }}>
                        <i className="fa fa-plus"></i> 
                        Add task
                    </Button>
                    {
                        this.state.disabled ? <Button disabled
                        onClick={()=>{
                            this.props.dispatch(updateTaskAction(this.state.taskName))
                        }}
                        className="ml-2">
                        <i class="fa fa-upload"></i> Update task
                        </Button> : 
                        <Button
                        onClick={()=>{
                            let {taskName} = this.state;
                            this.setState({
                                disabled: true,
                                taskName: ''
                            }, () => {
                                this.props.dispatch(updateTaskAction(taskName))
                            })
                        }}
                        className="ml-2">
                        <i class="fa fa-upload"></i> Update task
                        </Button>
                    }
                    {/* <Button
                        onClick={()=>{
                            this.props.dispatch(updateTaskAction(this.state.taskName))
                        }}
                        className="ml-2">
                        <i class="fa fa-upload"></i> Update task
                    </Button> */}
                    <hr className="bg-light" />

                    <Heading3>Task to do</Heading3>
                    <Table>
                        <Thead>
                        {this.renderTaskToDo()}
                            {/* <Tr>
                                <Th style={{verticalAlign: 'middle'}}>Task name</Th>
                                <Th className="text-right">
                                    <Button className="ml-1"><i class="fa fa-edit"></i></Button>
                                    <Button className="ml-1"><i class="fa fa-check"></i></Button>
                                    <Button className="ml-1"><i class="fa fa-trash"></i></Button>
                                </Th>
                            </Tr>
                            <Tr>
                                <Th style={{verticalAlign: 'middle'}}>Task name</Th>
                                <Th className="text-right">
                                    <Button className="ml-1"><i class="fa fa-edit"></i></Button>
                                    <Button className="ml-1"><i class="fa fa-check"></i></Button>
                                    <Button className="ml-1"><i class="fa fa-trash"></i></Button>
                                </Th>
                            </Tr> */}
                           
                        </Thead>
                    </Table>

                    <Heading3>Task completed</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskCompleted()}
                            {/* <Tr>
                                <Th style={{verticalAlign: 'middle'}}>Task name</Th>
                                <Th className="text-right">
                                    <Button className="ml-1"><i class="fa fa-edit"></i></Button>
                                </Th>
                            </Tr>
                            <Tr>
                                <Th style={{verticalAlign: 'middle'}}>Task name</Th>
                                <Th className="text-right">
                                    <Button className="ml-1"><i class="fa fa-trash"></i></Button>
                                </Th>
                            </Tr> */}
                        </Thead>
                    </Table>

                    
                </Container>
            </ThemeProvider>
            
        );
    }
    /* CACH3 : 
    Lifecycle nay chay sau render
    Day la lifeCycle tra ve props cu vs state cu cua component truoc khi render
    
    vi du TextField rong, click edit task2
        + prevProps: rong
        + this.props: task2
    vi du TextField task2, click edit task4
        + prevProps: task2
        + this.props: task4
    */
    componentDidUpdate(prevProps, prevState){
        // So sanh, neu nhu props truoc do (taskEdit truoc) !== taskEdit hien tai => can setState
        // Khong thuc hien so sanh se gay ra vong lap vo tan
        if(prevProps.taskEdit.id !== this.props.taskEdit.id){
            // Lay props gan vao state
        this.setState({
            taskName: this.props.taskEdit.taskName
        })
        /*Giai thich:
        B1: Lay props hien tai gan vao state -> qua value, hien thi ra UI
        B2: onChange thay doi du lieu -> setState chay lai, render -> componentDidUpdate
            tai day kiem tra thay dieu kien if id props truoc va sau khong thay doi => k setState
        */
        }

        
    }
}

const mapStateToProps = state => {
    return {
        themeToDoList: state.ToDoListReducer.themeToDoList,
        taskList: state.ToDoListReducer.taskList,
        taskEdit: state.ToDoListReducer.taskEdit
    }
}

export default connect(mapStateToProps, null)(TodoList);