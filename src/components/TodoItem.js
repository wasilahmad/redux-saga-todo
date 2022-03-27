import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../actions';

const TodoItem = ({ id, title, completed }) => {
	// const [checkboxVal, setCheckboxVal] = useState(false);
	const dispatch = useDispatch();

	const deleteHandler = (id) => {
		// console.log("Todo ID", id);
		dispatch(deleteTodo(id));
	}

	const completedHandler = (todo) => {
		//console.log("is todo completed:", todo);
		dispatch(editTodo(todo));
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' onChange={(event) => completedHandler({ id, title, completed })} checked={completed}></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={() => deleteHandler(id)}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
