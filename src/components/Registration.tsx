import React from 'react'
import Authorization from './authorization/Authorization'
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

const Registration:React.FC = () => {
	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

	const onSubmit = (data: unknown) => {
		console.log(data)
		localStorage.setItem('token', uuidv4())
	}
	
	return (
		<Authorization handleSubmit={handleSubmit} register={register} errors={errors} onSubmit={onSubmit}/>
	)
}

export default Registration