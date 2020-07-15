import React from 'react'

export const About = () => {
	return (
		<div className="jumbotron ">
			<div className="container">
				<h1 className="display-4">Информация о приложении</h1>
				<p className="lead">В данном приложении реализован инструмент поиска пользователей в <strong>github</strong>. Стили - <strong>bootstrap</strong>, работа с сервером - <strong>axios</strong>, при создании компонентов пользовался - <strong>хуками</strong>.</p>
			</div>
		</div>
	)
}