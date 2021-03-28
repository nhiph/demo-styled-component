import {combineReducers} from 'redux';
import {ToDoListReducer} from './ToDoListReducer';
import FacebookReducer from './FacebookReducer';
import BaiTapGameBauCuaReducer from './BaiTapGameBauCuaReducer';

export const RootReducer = combineReducers({
    ToDoListReducer,
    FacebookReducer,
    BaiTapGameBauCuaReducer
});