import React from 'react'
import Notification from "../Notification/Notification";
import {NavLink} from "react-router-dom";

const AddCar = props => {

    const addNotificationMessage = 'Машина была добавлена!'

    const formSubmit = (event) => {
        event.preventDefault()
        props.addCar()
    }

    const onUpdateValue = (event) => {
        props.updateInputValues(event.target.name, event.target.value)
    }

    if (props.notificationFlags.isAdd) {
        setTimeout(() => {
            props.setAddNotificationToggle(false)
        }, 2000)
    }
    return (
        <form onSubmit={formSubmit} className='form'>
            {
                props.notificationFlags.isAdd ? <Notification message={addNotificationMessage}/> : ''
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
            <div className='action'>
                <NavLink to='/list-car'>
                    <button type="button" className='button button-secondary'>
                        Назад к списку
                    </button>
                </NavLink>
                <button type="submit" className='button button-success'>
                    Добавить
                </button>
            </div>
        </form>
    )
}

export default AddCar