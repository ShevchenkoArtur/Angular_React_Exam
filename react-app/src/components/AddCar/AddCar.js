import React from 'react'
import style from './form.module.css'

const AddCar = props => {

    const formSubmit = (e) => {
        e.preventDefault()
        props.addCar()
    }

    const onUpdateValue = (e) => {
        props.updateInputValues(e.target.name, e.target.value)
    }

    return (
        <form onSubmit={formSubmit} className={style.form}>
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