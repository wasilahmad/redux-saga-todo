import { FETCH_TODOS, ADD_TODO, DELETE_TODO, EDIT_TODO } from '../constants/action-types';

export const fetchTodos = () => ({
    type: FETCH_TODOS
});

export const addTodo = (payload) => ({
    type: ADD_TODO,
    todo: payload
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id: id
});

export const editTodo = (payload) => ({
    type: EDIT_TODO,
    todo: payload
});