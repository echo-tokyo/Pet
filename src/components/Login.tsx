import React from 'react'
import Authorization from './authorization/Authorization'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom'

const Login:React.FC = () => {
	const nav = useNavigate()
	
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSubmit = (data: any) => {
		console.log(data)
		localStorage.setItem('token', uuidv4())
		localStorage.setItem('login', data.login)
		nav('/personalPage')
	}

	return (
		<Authorization onSubmit={onSubmit}/>
	)
}

export default Login