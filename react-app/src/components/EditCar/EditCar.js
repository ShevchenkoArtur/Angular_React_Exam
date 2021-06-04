import React from 'react'
import style from "../AddCar/form.module.css";
import {Redirect} from "react-router-dom";

const EditCar = props => {

    // const editedCar =

    const formSubmit = (e) => {
        e.preventDefault()
    }

    const onUpdateValue = (e) => props.updateInputValues(e.target.name, e.target.value)


    return (
        <form onSubmit={formSubmit} className={style.form}>
            <label>Брэнд:
                <input type="text"
                    // placeholder={props.cars.filter(car => car.id === props.editedCarId)[0].brand}
                       name={props.inputSettings.name.brand}
                       onChange={onUpdateValue}
                />
            </label>
            <label>Модель:
                <input type="text"
                    // placeholder={props.cars.filter(car => car.id === props.editedCarId)[0].model}
                       name={props.inputSettings.name.model}
                       onChange={onUpdateValue}
                />
            </label>
            <label>Год выпуска:
                <input type="number"
                    // placeholder={props.cars.filter(car => car.id === props.editedCarId)[0].year}
                       name={props.inputSettings.name.year}
                       onChange={onUpdateValue}
                />
            </label>
            <label>Цена:
                <input type="number"
                    // placeholder={props.cars.filter(car => car.id === props.editedCarId)[0].price}
                       name={props.inputSettings.name.price}
                       onChange={onUpdateValue}
                />
            </label>
            <div className={style.action}>

                <button type="button">
                    Назад к списку
                </button>


                <button onClick={props.onEditCar} type="submit">
                    Редактировать
                </button>
            </div>
        </form>
    )
}

export default EditCar