import React from 'react'

interface IProps {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Authorization:React.FC<IProps> = ({handleSubmit}) => {
	return (
		<form action="" onSubmit={(e) => handleSubmit(e)}>
			{location.pathname==='/registration' &&
				<input type="text" placeholder='Имя'/>
			}
			<input type="text" placeholder='Почта'/>
			<input type="password" placeholder='Пароль'/>
			<input type="submit" />
		</form>
	)
}

export default Authorization