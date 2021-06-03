import React from 'react'
import style from './form.module.css'
import Notification from "../Notification/Notification";

const AddCar = props => {

    const addMessage = 'Машина была добавлена!'

    const formSubmit = (e) => {
        e.preventDefault()
        props.addCar()
    }

    const onUpdateValue = (e) => {
        props.updateInputValues(e.target.name, e.target.value)
    }

    if (props.notificationFlags.isAdd) {
        setTimeout(() => {
            props.setAddToggle(false)
        }, 2000)
    }
    return (
        <form onSubmit={formSubmit} className={style.form}>
            {
                props.notificationFlags.isAdd ? <Notification message={addMessage}/> : ''
            }
            <label>Брэнд:
                <input type="text"
                       value={props.inputInfo.value.brand}
                       onChange={onUpdateValue}
                       name={props.inputInfo.name.brand}
                />
            </label>
            <label>Модель:
                <input type="text"
                       value={props.inputInfo.value.model}
                       name={props.inputInfo.name.model}
                       onChange={onUpdateValue}
                />
            </label>
            <label>Год выпуска:
                <input type="number"
                       value={props.inputInfo.value.year}
                       name={props.inputInfo.name.year}
                       onChange={onUpdateValue}
                />
            </label>
            <label>Цена:
                <input type="number"
                       value={props.inputInfo.value.price}
                       name={props.inputInfo.name.price}
                       onChange={onUpdateValue}
                />
            </label>
            <div className={style.action}>
                <button type="submit">
                    Добавить
                </button>
            </div>
        </form>
    )
}

export default AddCar