import React , { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../actions';
import TodoItem from './TodoItem';

const TodoList = () => {
	const todos = useSelector( state => state.r1.todos );
	const dispatch = useDispatch();
	console.log("initial todos:", todos);
	
	useEffect(() => {
		console.log("inside TodoList.js useEffect()");
		// fetch('https://my-json-server.typicode.com/wasilahmad/redux-saga-todo/todos')
		// .then( response => response.json())
		// .then( data => console.log("API Response:", data));
		
		// disptach an action to fetch todos 
		dispatch(fetchTodos());

	}, [dispatch]); // <- dependencies : always to have dependencies if ommitted it will goes infinite loop 

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
