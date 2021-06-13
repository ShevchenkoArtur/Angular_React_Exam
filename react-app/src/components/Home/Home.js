import React from 'react'
import style from './Home.module.css'

const Home = props => {
    return (
        <div className={style.home}>
            <h1>SPA приложение на React JS</h1>

            <p>Было реализовано удаление, добавление и редактирование данных, полученных из Rest API</p>
        </div>
    )
}

export default Home