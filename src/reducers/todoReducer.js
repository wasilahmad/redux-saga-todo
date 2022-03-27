import { FETCH_TODOS_SUCCESS, ADD_TODO_SUCCESS, DELETE_TODO_SUCCESS, EDIT_TODO_SUCCESS } from '../constants/action-types';

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
    switch (action.type) {
        case FETCH_TODOS_SUCCESS:
        // console.log("FETCH_TODOS_SUCCESS", action.payload);
        return {
            ...state,
            todos: [...action.payload.todos]
        };
        case ADD_TODO_SUCCESS:
        // console.log("ADD_TODO_SUCCESS", action.payload);
        const newTodo = action.payload.todo;
        return {
            ...state,
            todos: [...state.todos, newTodo]
        };
        case DELETE_TODO_SUCCESS:
        // console.log("DELETE_TODO_SUCCESS", action.payload);
        const updatedTodos = state.todos.filter( todo => todo.id !== action.payload);
        return {
            ...state,
            todos: [...updatedTodos]
        };
        case EDIT_TODO_SUCCESS:
        //console.log("EDIT_TODO_SUCCESS", action.payload);
        //const tempTodos = [...state.todos];
        //const { id, completed } = action.payload.todo;           
        return {
            ...state,
            todos: [...state.todos]
        };
        default : return {...state};
    }
}

export default todoReducer;