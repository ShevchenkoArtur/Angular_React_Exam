import React from 'react'
import style from "../AddCar/form.module.css";
import {NavLink} from "react-router-dom";
import Notification from "../Notification/Notification";

const EditCar = props => {

    const editNotificationMessage = 'Машина была изменена!'

    if (props.notificationFlags.isEdit) {
        setTimeout(() => {
            props.setEditNotificationToggle(false)
        }, 2000)
    }

    const formSubmit = (event) => {
        event.preventDefault()
        props.onEditCar()
    }

    const onUpdateValue = (event) => props.updateEditedCarInputValues(event.target.name, event.target.value)


    return (
        <>
            {
                props.notificationFlags.isEdit ? <Notification message={editNotificationMessage}/> : ''
            }
            <form onSubmit={formSubmit} className={style.form}>
                <label>Брэнд:
                    <input type="text"
                           value={props.cars.filter(car => car.id === props.editedCarId)[0].brand}
                           name={props.inputControl.brandInput.name}
                           onChange={onUpdateValue}
                    />
                </label>
                <label>Модель:
                    <input type="text"
                           value={props.cars.filter(car => car.id === props.editedCarId)[0].model}
                           name={props.inputControl.modelInput.name}
                           onChange={onUpdateValue}
                    />
                </label>
                <label>Год выпуска:
                    <input type="number"
                           value={props.cars.filter(car => car.id === props.editedCarId)[0].year}
                           name={props.inputControl.yearInput.name}
                           onChange={onUpdateValue}
                    />
                </label>
                <label>Цена:
                    <input type="number"
                           value={props.cars.filter(car => car.id === props.editedCarId)[0].price}
                           name={props.inputControl.priceInput.name}
                           onChange={onUpdateValue}
                    />
                </label>
                <div className={style.action}>
                    <NavLink to='/list-car'>
                        <button type="button">
                            Назад к списку
                        </button>
                    </NavLink>
                    <button type="submit">
                        Редактировать
                    </button>
                </div>
            </form>
        </>
    )
}

export default EditCar