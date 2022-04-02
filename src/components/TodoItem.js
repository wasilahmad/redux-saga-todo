import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../actions';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const deleteTodoHandler = (id) => {
		// console.log("Todo ID", id);
		dispatch(deleteTodo(id));
	}

	const completeTodoHandler = (todo) => {		
		dispatch(editTodo(todo));
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' onChange={(event) => completeTodoHandler({ id, title, completed: !completed })} checked={completed}></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={() => deleteTodoHandler(id)}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
