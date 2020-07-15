import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
	<div className = "navbar navbar-dark bg-primary navbar-expand-lg">
		<div className = "navbar-brand">
			Github Search
		</div>
		<ul className = "navbar-nav">
			<li className = "nav-item">
				<NavLink to = "/" className = "nav-link" exact>Главная</NavLink>
			</li>
			<li className = "nav-item">
				<NavLink to = "/about" className = "nav-link">Информация</NavLink>
			</li>
		</ul>
	</div>
)