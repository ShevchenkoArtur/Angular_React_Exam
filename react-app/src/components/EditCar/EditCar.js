import React from 'react'
import style from "../AddCar/form.module.css";
import {Redirect} from "react-router-dom";

const EditCar = props => {

    const editedCar = props.cars.filter(car => car.id === props.editedCarId)
    console.log(editedCar);
    const formSubmit = (e) => {
        e.preventDefault()
    }

    const goToListCar = () => {
        props.setNavigateToEditToggle(false)
    }

    return (
        <form onSubmit={formSubmit} className={style.form}>
            <label>Брэнд:
                <input type="text"
                       value={editedCar[0].brand}
                />
            </label>
            <label>Модель:
                <input type="text"
                       value={editedCar[0].model}
                />
            </label>
            <label>Год выпуска:
                <input type="number"
                       value={editedCar[0].year}
                />
            </label>
            <label>Цена:
                <input type="number"
                       value={editedCar[0].price}
                />
            </label>
            <div className={style.action}>

                <button onClick={goToListCar}>
                    Назад к списку
                </button>
                {
                    props.navigateToEdit ? '' : <Redirect to='/list-car'/>
                }

                <button type="submit">
                    Редактировать
                </button>
            </div>
        </form>
    )
}

export default EditCar