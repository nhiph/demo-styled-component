import { arrTheme } from "../../theme/ThemeManager";
import { ToDoListDarkTheme } from "../../theme/ToDoListDarkTheme";
import { add_task, change_theme, done_task, delete_task, edit_task, update_task } from '../types/ToDoList';

const initialState = {
    themeToDoList: ToDoListDarkTheme,
    taskList: [
        {id: 'task-1', taskName: 'task 1', done: true},
        {id: 'task-2', taskName: 'task 2', done: false},
        {id: 'task-3', taskName: 'task 3', done: true},
        {id: 'task-4', taskName: 'task 4', done: false},
    ],
    taskEdit: {id: '-1', taskName:'', done: false}
    // taskEdit: {id: '0', taskName:'', done: false}

}


export const ToDoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case add_task: {
            // Kiem tra rong
            if(action.newTask.taskName.trim()===''){
                alert('Task name is required!');
                return {...state};
            }
            // Kiem tra ton tai
            let taskListUpdate = [...state.taskList];
            let index = taskListUpdate.findIndex(task => task.taskName === action.newTask.taskName);
            if(index !== -1){
                alert('Task name has already existed!');
                return {...state};  
            }
            taskListUpdate.push(action.newTask);
            // Xu ly xong thi gan newTask moi vao taskList
            state.taskList = taskListUpdate;
            return{...state};
        }
    case change_theme: {
        console.log(action.themeId);
        let theme = arrTheme.find(theme => theme.id == action.themeId);
        if(theme){
            state.themeToDoList = {...theme.theme};
            return {...state};
        }
    }
    case done_task: {
        let taskListUpdate = [...state.taskList];
        let index = taskListUpdate.findIndex(task=>task.id === action.taskId);
        if(index !== -1){
            taskListUpdate[index].done = true;
        }

        return {...state, taskList: taskListUpdate};
    }
    case delete_task: {
        let taskListUpdate = [...state.taskList];
        let index = taskListUpdate.findIndex(task=>task.id === action.taskId);
        // Cach 2 taskListUpdate = taskListUpdate.filter(task=>task.id === action.taskId);
        taskListUpdate.splice(index, 1);
        return {...state, taskList: taskListUpdate};
    }
    case edit_task: {
        return {...state, taskEdit: action.task};
    }
    case update_task: {
        // Cap nhat task chinh su cho taskEdit
        state.taskEdit = {...state.taskEdit, taskName: action.taskName};
        // Tim trong taskList id giong vs taskEdit, cap nhat lai state cho UI
        let taskListUpdate = [...state.taskList];
        let index = taskListUpdate.findIndex(task => task.id === state.taskEdit.id);
        if(index !== -1){
            taskListUpdate[index] = state.taskEdit;
        }
        state.taskList = taskListUpdate;
        state.taskEdit = {id:'-1', taskName: '', done: false}
        return {...state};
    }
    default:
        return {...state};
    }
}
