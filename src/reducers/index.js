import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
    r1 : todoReducer 
});


export default rootReducer;