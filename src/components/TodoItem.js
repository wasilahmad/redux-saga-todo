import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../actions';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	const deleteHandler = (id) => {
		// console.log("Todo ID", id);
		dispatch(deleteTodo(id));
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed}></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={() => deleteHandler(id)}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
