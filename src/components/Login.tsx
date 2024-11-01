import React from 'react'
import Authorization from './authorization/Authorization'
import { v4 as uuidv4 } from 'uuid';
// import { useForm } from 'react-hook-form';

const Login:React.FC = () => {
	// const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log('Вход')
		localStorage.setItem('token', uuidv4())
	}

	return (
		<Authorization handleSubmit={handleSubmit}/>
	)
}

export default Login