import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../actions';

const AddTodoForm = () => {
	// to set input field value in localstate
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	
	const onSubmit = (event) => {
		event.preventDefault();
		// console.log('user entered:', value);
		const newTodo = {
			id: `id-${(new Date()).getTime()}`,
			title: value, 
			completed: false 
		}
		dispatch(addTodo(newTodo));
		setValue(''); // to reset input field
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>
			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
};

export default AddTodoForm;
