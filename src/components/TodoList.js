import React , { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../actions';
import TodoItem from './TodoItem';

const TodoList = () => {
	const todos = useSelector( state => state.r1 );
	const dispatch = useDispatch();
	console.log("initial todos:", todos);

	useEffect(() => {
		console.log("inside useEffect() hook");
		// fetch('https://my-json-server.typicode.com/wasilahmad/redux-saga-todo/todos')
		// .then( response => response.json())
		// .then( data => console.log("API Response:", data));
		dispatch(fetchTodos());
	});

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
