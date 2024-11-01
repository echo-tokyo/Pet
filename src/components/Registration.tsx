import React from 'react'
import Authorization from './authorization/Authorization'
import { v4 as uuidv4 } from 'uuid';

const Registration:React.FC = () => {
	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log('Регистрация')
		localStorage.setItem('token', uuidv4())
	}
	return (
		<Authorization handleSubmit={handleSubmit}/>
	)
}

export default Registration