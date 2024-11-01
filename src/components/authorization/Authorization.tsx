import React from 'react'
import { FieldErrors, FieldValues, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'

interface IProps {
	handleSubmit: UseFormHandleSubmit<FieldValues>
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
  onSubmit: (data: FieldValues) => void
}

const Authorization:React.FC<IProps> = ({handleSubmit, register, errors, onSubmit}) => {
	return (
		<form action="" onSubmit={handleSubmit(onSubmit)}>

			{location.pathname==='/registration' &&
				<input {...register('name')} type="text" placeholder='Имя'/>
			}

			<input {...register('email', {required: true})} type="text" placeholder='Почта'/>
			{errors.email && <p>Введите почту</p>}

			<input {...register('password', {required: true})} type="password" placeholder='Пароль'/>
			{errors.password && <p>Введите пароль</p>}
			
			<input type="submit" />

		</form>
	)
}

export default Authorization