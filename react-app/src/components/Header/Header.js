import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = props => {
    return (
        <header>
            <ul>
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="/about">О студенте</NavLink></li>
                <li><NavLink to="/list-car">Список машин</NavLink></li>
                <li><NavLink to="/add-car">Добавить машину</NavLink></li>
            </ul>
        </header>
    )
}

export default Header