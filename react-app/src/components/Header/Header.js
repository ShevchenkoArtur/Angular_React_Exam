import React from 'react'
import style from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = props => {
    return (
        <header className={style.header}>
            <div className={style.menu}>
                <ul className={style.list}>
                    <li className={style.item}>
                        <NavLink activeClassName={style.active}
                                 exact
                                 to="/"
                        >
                            Главная
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink activeClassName={style.active} to="/about">
                            О студенте
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink activeClassName={style.active} to="/list-car">
                            Список машин
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink activeClassName={style.active} to="/add-car">
                            Добавить машину
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header