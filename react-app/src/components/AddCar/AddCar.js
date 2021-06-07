import React from 'react'
import style from './form.module.css'
import Notification from "../Notification/Notification";

const AddCar = props => {

    const addMessage = 'Машина была добавлена!'

    const formSubmit = (event) => {
        event.preventDefault()
        props.addCar()
    }

    const onUpdateValue = (event) => {
        props.updateInputValues(event.target.name, event.target.value)
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
                       value={props.inputControl.brandInput.value}
                       name={props.inputControl.brandInput.name}
                       onChange={onUpdateValue}
                />
            </label>
            <label>Модель:
                <input type="text"
                       value={props.inputControl.modelInput.value}
                       name={props.inputControl.modelInput.name}
                       onChange={onUpdateValue}
                />
            </label>
            <label>Год выпуска:
                <input type="number"
                       value={props.inputControl.yearInput.value}
                       name={props.inputControl.yearInput.name}
                       onChange={onUpdateValue}
                />
            </label>
            <label>Цена:
                <input type="number"
                       value={props.inputControl.priceInput.value}
                       name={props.inputControl.priceInput.name}
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