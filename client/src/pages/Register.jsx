import React from 'react';
import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';

// set the state
const initialState = {
	name: '',
	email: '',
	password: '',
	isMember: true,
};

const Register = () => {
	const [values, setValues] = useState(initialState);
	// global state and useNavigate
	const globalState = useAppContext();
	const { isLoading, showAlert, displayAlert } = globalState;
	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember });
	};

	const handelChange = e => {
		// [e.target.name]: e.target.value - tells us in which field there is a change in the value
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();

		// Get the data that the user has put in the form
		const { name, email, password, isMember } = values;

		// Check if the user missed any required fields
		if (!email || !password || (!isMember && !name)) {
			displayAlert();
			return;
		} else {
			console.log(values);
		}
	};

	return (
		<Wrapper className='full-page'>
			<form action='' className='form' onSubmit={onSubmit}>
				<Logo />
				<h3>{values.isMember ? 'Login' : 'Register'}</h3>
				{showAlert && <Alert />}
				{/* name input */}
				{!values.isMember && (
					<FormRow
						type='text'
						name='name'
						value={values.name}
						handelChange={handelChange}
					/>
				)}
				{/* email input */}
				<FormRow
					type='email'
					name='email'
					value={values.email}
					handelChange={handelChange}
				/>
				{/* password input */}
				<FormRow
					type='password'
					name='password'
					value={values.password}
					handelChange={handelChange}
				/>
				<button type='submit' className='btn btn-block'>
					submit
				</button>
				<p>
					{values.isMember
						? 'Not a member yet?'
						: 'Already a member?'}
					<button
						type='button'
						onClick={toggleMember}
						className='member-btn'>
						{values.isMember ? 'Register' : 'Login'}
					</button>
				</p>
			</form>
		</Wrapper>
	);
};

export default Register;
