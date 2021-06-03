import React from 'react'
import style from './Notification.module.css'

const Notification = props => {
    return (
        <div className={style.notification}>
            &#10004; {props.message}
        </div>
    )
}

export default Notification