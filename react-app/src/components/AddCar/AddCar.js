import React from 'react'

const AddCar = props => {

    const formSubmit = (e) => {
        e.preventDefault()
        props.addCar()
    }

    const onUpdateValue = (e) => {
        props.updateInputValues(e.target.name, e.target.value)
    }

    return (
        <form onSubmit={formSubmit}>
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
                <input type="text"
                       value={props.inputInfo.value.year}
                       name={props.inputInfo.name.year}
                       onChange={onUpdateValue}
                />
            </label>
            <label>Цена:
                <input type="text"
                       value={props.inputInfo.value.price}
                       name={props.inputInfo.name.price}
                       onChange={onUpdateValue}
                />
            </label>
            <div>
                <button type="submit">Добавить</button>
            </div>
        </form>
    )
}

export default AddCar