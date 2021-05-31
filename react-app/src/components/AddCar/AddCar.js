import React from 'react'

const AddCar = props => {

    const formSubmit = (e) => {
         e.preventDefault()
        console.log(e)
    }

    // const onUpdateValue = (e) => {
    //     // console.log(e)
    //     props.updateInputValues(e.target.name, e.target.value)
    // }

    return (
        <form onSubmit={formSubmit}>
            {/*<label>Брэнд:*/}
            {/*    <input type="text"*/}
            {/*           value={props.inputSettings.value.brand}*/}
            {/*           onChange={onUpdateValue}*/}
            {/*           name={props.inputSettings.name.brand}*/}
            {/*    />*/}
            {/*</label>*/}
            <label>Модель:
                <input type="text"
                       value={props.inputSettings.value.model}
                       name={props.inputSettings.name.model}
                       // onChange={onUpdateValue}
                />
            </label>
            {/*<label>Год выпуска:*/}
            {/*    <input type="text"*/}
            {/*           value={props.inputSettings.value.year}*/}
            {/*           name={props.inputSettings.name.year}*/}
            {/*           onChange={onUpdateValue}*/}
            {/*    />*/}
            {/*</label>*/}
            {/*<label>Цена:*/}
            {/*    <input type="text"*/}
            {/*           value={props.inputSettings.value.price}*/}
            {/*           name={props.inputSettings.name.price}*/}
            {/*           onChange={onUpdateValue}*/}
            {/*    />*/}
            {/*</label>*/}
            <div>
                <button type="submit">Добавить</button>
            </div>
        </form>
    )
}

export default AddCar