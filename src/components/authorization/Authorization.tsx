import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'

interface IProps {
  onSubmit: (data: FieldValues) => void
}

const Authorization:React.FC<IProps> = ({onSubmit}) => {
	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

	return (
		<form action="" onSubmit={handleSubmit(onSubmit)}>

			{location.pathname==='/registration' &&
				<input {...register('name')} type="text" placeholder='Имя'/>
			}

			<input {...register('login', {required: true})} type="text" placeholder='Логин'/>
			{errors.login && <p>Введите логин</p>}

			<input {...register('password', {required: true})} type="password" placeholder='Пароль'/>
			{errors.password && <p>Введите пароль</p>}
			
			<input type="submit" />

		</form>
	)
}

export default Authorization