import { FETCH_TODOS_SUCCESS } from '../constants/action-types';

const initialState = { 
    todos: [
        { id: 1, title: 'todo1', completed: false },
        { id: 2, title: 'todo2', completed: false },
        { id: 3, title: 'todo3', completed: true },
        { id: 4, title: 'todo4', completed: false },
        { id: 5, title: 'todo5', completed: false },
    ]
};

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TODOS_SUCCESS : 
        console.log("FETCH_TODOS_SUCCESS", action.payload);
        return {
            ...state,
            todos: [...action.payload.todos]
        };
        default : return {...state};
    }
}

export default todoReducer;